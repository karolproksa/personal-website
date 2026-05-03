import type { NextPage } from "next"
import Head from "next/head"
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import BlogFeed from "../components/BlogFeed"
import { FaLinkedin } from "react-icons/fa"

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
                    My name is Karol. I'm the co-founder of{" "}
                    <a
                        href='https://derpetual.com'
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue underline'>
                        Derpetual
                    </a>{" "}
                    - a decentralized protocol that turns any number into a
                    leverage tradeable market . I'm also the founding member of{" "}
                    <a
                        href='https://x.com/superteampol'
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue underline'>
                        Solana Superteam Poland
                    </a>
                    .
                    <br />
                    <br />
                    In my spare time, I trade shitcoins and research things I
                    find interesting, mostly related to blockchains, economics
                    and programming. On this website, you'll find research
                    articles and opinion pieces about my current obsession.
                </p>
                <br />
                <div className='flex gap-2'>
                    <a
                        href='https://www.linkedin.com/in/karolproksa/'
                        target='_blank'
                        rel='noreferrer'
                        className='hover:translate-y-[-2px] hover:text-blue duration-300 transition'>
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </Container>
            <BlogFeed />
        </div>
    )
}

export default Home
