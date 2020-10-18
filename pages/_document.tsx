import React from 'react';
import { StyleSheetServer } from 'aphrodite/no-important';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { DocumentInitialProps, RenderPageResult } from 'next/dist/next-server/lib/utils';

interface MyDocumentProps extends DocumentInitialProps {
	css?: {
		content: string;
	};
	ids?: string[];
	html: string;
}

class MyDocument extends Document<MyDocumentProps> {
	static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
		const { renderPage } = ctx;
		const { html, css } = StyleSheetServer.renderStatic(() => {
			const result = renderPage() as RenderPageResult;
			return result.html;
		});
		const initialProps = await Document.getInitialProps(ctx);
		const ids = css.renderedClassNames;
		return { ...initialProps, html, css, ids };
	}

	render(): JSX.Element {
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
