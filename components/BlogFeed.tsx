import React from 'react'
import Container from './Container'
import Link from 'next/link'

const BlogFeed = () => {
	return (
		<section>
			<Container>
				<h2 className='mt-10 text-blue font-light text-xl'>
					recent articles
				</h2>
				<BlogPost
					name='Using LLMs for Super High Level Programming'
					date='15 Sep 2023'
					href='/blog/using-llms-for-super-high-level-programming'
				/>
			</Container>
		</section>
	)
}
interface BlogPostI {
	name: string
	date: string
	href: string
}

const BlogPost = ({ name, date, href }: BlogPostI) => {
	return (
		<Link href={href}>
			<article className='mb-4 flex items-center justify-between font-main hover:text-blue hover:translate-x-4 duration-300 transition cursor-pointer'>
				<p className='text-xl font-bold'>{name}</p>
				<p className='text-sm pl-4'>{date}</p>
			</article>
		</Link>
	)
}

export default BlogFeed
