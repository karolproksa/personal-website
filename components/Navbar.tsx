import React from 'react'
import Container from './Container'

const Navbar = () => {
	return (
		<>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
				rel='stylesheet'
			/>
			<Container>
				<header>
					<h1 className='font-main text-3xl font-semibold py-6'>
						Karol Proksa's <span className='text-blue'>blog</span>
					</h1>
				</header>
			</Container>
		</>
	)
}

export default Navbar
