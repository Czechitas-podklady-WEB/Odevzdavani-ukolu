import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home({
	courseId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Odevzdávání úkolů</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>Odevzdávání úkolů</h1>
			<p>
				Klíč kurzu: <b>{courseId}</b>
			</p>
		</div>
	)
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	return {
		props: {
			courseId: process.env.COURSE_ID || '',
		},
	}
}
