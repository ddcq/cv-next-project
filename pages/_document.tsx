import { StyleSheetServer } from "aphrodite/no-important";
import Document, { Head, Html, Main, NextScript } from "next/document";

interface MyDocumentProps {
  renderPage: Function;
  css?: {
    content: string;
  };
  ids?: string[];
  html?: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps({ renderPage }: MyDocumentProps) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    const ids = css.renderedClassNames;
    const htmlObj = (html as any) as { html: string };
    return { html: htmlObj.html, css, ids };
  }

  render() {
    /* Make sure to use data-aphrodite attribute in the style tag here
    so that aphrodite knows which style tag it's in control of when
    the client goes to render styles. If you don't you'll get a second
    <style> tag */
    const { css, ids } = this.props;
    return (
      <Html>
        <Head>{css && <style data-aphrodite dangerouslySetInnerHTML={{ __html: css.content }} />}</Head>
        <body>
          <Main />
          <NextScript />
          {ids && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.__REHYDRATE_IDS = ${JSON.stringify(ids)}
                `,
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
