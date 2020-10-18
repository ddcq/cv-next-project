import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/app.scss';

export default function App({ Component, pageProps }: AppProps): ReactElement {
	return (
		<>
			<Head>
				<title>Denis Declercq - vCard / Resume / CV</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="description" content="vCard & Resume" />
				<meta name="keywords" content="vcard, responsive, resume, personal, card, cv, cards, portfolio" />
				<meta name="author" content="ddcq" />
				<link rel="shortcut icon" href="images/favicons/favicon.ico" />{' '}
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />;
			</Provider>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
			<script src="https://use.fontawesome.com/8da76d029b.js"></script>

			{/*        Main Scripts
			 */}
			<script src="scripts.js"></script>
		</>
	);
}
