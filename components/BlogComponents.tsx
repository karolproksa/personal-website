import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface TextI {
	children?: React.ReactNode
}

type hrefType = { href: string; externalHref?: never }
type externalHrefType = { href?: never; externalHref: string }

type LinkI = TextI & (hrefType | externalHrefType)

interface ImgI {
	src: StaticImageData | string
	alt: string
}

const H1 = ({ children }: TextI) => {
	return (
		<h1 className='text-blue font-main font-bold text-2xl md:text-4xl leading-tight my-8 max-w-2xl'>
			{children}
		</h1>
	)
}

const H2 = ({ children }: TextI) => {
	return (
		<h2 className='font-main font-semibold text-xl md:text-2xl leading-tight my-6 max-w-2xl'>
			{children}
		</h2>
	)
}

const H3 = ({ children }: TextI) => {
	return (
		<h2 className='font-main font-medium text-white text-lg md:text-xl leading-tight my-4 max-w-2xl'>
			{children}
		</h2>
	)
}

const P = ({ children }: TextI) => {
	return (
		<p className='text-white font-main font-regular text-base md:text-lg leading-relaxed my-4 max-w-2xl'>
			{children}
		</p>
	)
}

const Q = ({ children }: TextI) => {
	return (
		<blockquote className='flex items-center gap-6'>
			<div className='w-1 h-32 bg-gradient-to-t from-blue to-green'></div>
			<p className='text-white italic font-main font-regular text-sm md:text-base leading-relaxed my-4'>
				{children}
			</p>
		</blockquote>
	)
}

const A = ({ children, href, externalHref }: LinkI) => {
	return (
		<span className='text-green cursor-pointer w-auto font-main font-regular text-base md:text-lg leading-relaxed text-blue underline'>
			{href && <Link href={href}>{children}</Link>}
			{externalHref && (
				<a
					href={externalHref}
					target='_blank'
					rel='noreferrer'>
					{children}
				</a>
			)}
		</span>
	)
}

const IMG = ({ src, alt }: ImgI) => {
	return (
		<div className='w-full max-w-5xl h-[30rem] mx-auto relative my-10'>
			<Image
				className='rounded-2xl'
				layout='fill'
				objectFit='cover'
				src={src}
				alt={alt}
			/>
		</div>
	)
}

export { H1, H2, H3, P, Q, A, IMG }
