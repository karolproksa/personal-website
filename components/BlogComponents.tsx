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

const TITLE = ({ children }: TextI) => {
	return (
		<h1 className='text-blue font-main font-bold text-3xl md:text-5xl leading-tight my-8 max-w-2xl'>
			{children}
		</h1>
	)
}

const H1 = ({ children }: TextI) => {
	return (
		<h1 className='text-white font-main font-bold text-2xl md:text-4xl leading-tight my-8 max-w-2xl'>
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

const I = ({ children }: TextI) => {
	return <span className='italic'>{children}</span>
}

const Q = ({ children }: TextI) => {
	return (
		<blockquote className='flex gap-6 '>
			<div className='w-0.5 shrink-0 bg-gradient-to-t from-blue to-transparent'></div>
			<p className='text-white italic font-main font-regular text-sm md:text-base leading-relaxed my-2'>
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
				<a href={externalHref} target='_blank' rel='noreferrer'>
					{children}
				</a>
			)}
		</span>
	)
}

const IMG = ({ src, alt }: ImgI) => {
	return <Image className='rounded-lg my-4' src={src} alt={alt} />
}

const CODE = ({ children }: TextI) => {
	return (
		<>
			<div className='w-full bg-neutral-900 rounded-t-lg p-4'>
				<code className='font-space-mono text-neutral-200 w-full my-4'>
					{children}
				</code>
			</div>
			<div
				onClick={() =>
					navigator.clipboard.writeText(children?.toString() || '')
				}
				className='cursor-pointer hover:text-blue transition duration-300 font-main w-full bg-neutral-800 px-4 py-2 rounded-b-lg'
			>
				COPY
			</div>
		</>
	)
}

const INLINECODE = ({ children }: TextI) => {
	return (
		<code className='font-space-mono text-neutral-200 w-full px-1 text-sm bg-neutral-900 rounded-sm'>
			{children}
		</code>
	)
}

export { TITLE, H1, H2, H3, P, I, Q, A, IMG, CODE, INLINECODE }
