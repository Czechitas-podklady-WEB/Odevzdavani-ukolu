// Fixes FOUC: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js

import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { themeColor } from '../components/ThemeProvider'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="cs">
				<Head>
					<meta name="theme-color" content={themeColor} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}
