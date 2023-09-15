import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Navbar = () => {
	return (
		<>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono&display=swap'
				rel='stylesheet'
			/>
			<Container>
				<header>
					<Link href='/'>
						<h1 className='hover:translate-x-4 duration-300 hover:text-blue transition cursor-pointer font-main text-3xl font-semibold py-6'>
							Karol Proksa's{' '}
							<span className='text-blue'>blog</span>
						</h1>
					</Link>
				</header>
			</Container>
		</>
	)
}

export default Navbar
