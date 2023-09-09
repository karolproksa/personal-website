import React from 'react'
import Container from './Container'

const BlogFeed = () => {
	return (
		<section>
			<Container>
				<h2 className='mt-10 text-blue font-light text-xl'>
					recent articles
				</h2>
				<BlogPost
					name='Using LLMs as Super High Level Programming Languages'
					date='11 Sep 2023'
				/>
			</Container>
		</section>
	)
}
interface BlogPostI {
	name: string
	date: string
}

const BlogPost = ({ name, date }: BlogPostI) => {
	return (
		<article className='mb-4 flex items-center justify-between font-main hover:text-blue hover:translate-x-4 duration-300 transition cursor-pointer'>
			<p className='text-xl font-bold'>{name}</p>
			<p className='text-sm pl-4'>{date}</p>
		</article>
	)
}

export default BlogFeed
