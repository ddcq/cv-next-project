import { DocumentInitialProps } from 'next/dist/next-server/lib/utils';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

interface MyDocumentProps extends DocumentInitialProps {
	styles: React.ReactElement;
}

class MyDocument extends Document<MyDocumentProps> {
	static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
		// const renderPage = ctx.renderPage;
		// const sheet = new ServerStyleSheet();
		// const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
		// const styleTags = sheet.getStyleElement();
		// return { ...page, styleTags };
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<title>My page</title>
					{/* Step 5: Output the styles in the head  */}
					{this.props.styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
