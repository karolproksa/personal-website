import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import BlogFeed from '../components/BlogFeed'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Karol Proksa's blog</title>
				<meta
					name='description'
					content='Read my blog articles about technology, economics and fun experiments I do with these two.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Container className='font-main'>
				<h2 className='text-blue font-light text-xl'>whoami</h2>
				<p className='max-w-[600px]'>
					My name is Karol. At daytime, I work as CEO and co-founder at{' '}
					<a
						href='https://synergyai.io'
						target='_blank'
						rel='noreferrer'
						className='text-blue underline'
					>
						SynergyAI
					</a>
					. I have also co-founded a software development company
					called{' '}
					<a
						href='https://parlour.dev'
						target='_blank'
						rel='noreferrer'
						className='text-blue underline'
					>
						Parlour Development
					</a>
					.
					<br />
					<br />
					In my spare time, I trade shitcoins and research things I find
					interesting, mostly related to blockchains, economics
					and programming. On this website, you'll find research articles and opinion pieces about my current obsession.
				</p>
				<br />
				<div className='flex gap-2'>
					<a
						href='https://twitter.com/karol_proksa'
						target='_blank'
						rel='noreferrer'
						className='hover:translate-y-[-2px] hover:text-blue duration-300 transition'
					>
						<FaTwitter size={20} />
					</a>
					<a
						href='https://www.linkedin.com/in/karolproksa/'
						target='_blank'
						rel='noreferrer'
						className='hover:translate-y-[-2px] hover:text-blue duration-300 transition'
					>
						<FaLinkedin size={20} />
					</a>
				</div>
			</Container>
			<BlogFeed />
		</div>
	)
}

export default Home
