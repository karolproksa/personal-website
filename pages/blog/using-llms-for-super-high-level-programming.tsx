import React from 'react'
import Navbar from '../../components/Navbar'
import {
	A,
	CODE,
	H1,
	H2,
	H3,
	I,
	IMG,
	INLINECODE,
	P,
	Q,
	TITLE,
} from '../../components/BlogComponents'
import Container from '../../components/Container'
import Img1 from '../../public/blog/using-llms-for-super-high-level-programming/1.png'
import Img2 from '../../public/blog/using-llms-for-super-high-level-programming/2.png'
import Img3 from '../../public/blog/using-llms-for-super-high-level-programming/3.png'
import Img4 from '../../public/blog/using-llms-for-super-high-level-programming/4.png'
import Img6 from '../../public/blog/using-llms-for-super-high-level-programming/6.png'
import Img7 from '../../public/blog/using-llms-for-super-high-level-programming/7.png'
import Img8 from '../../public/blog/using-llms-for-super-high-level-programming/8.png'
import Img9 from '../../public/blog/using-llms-for-super-high-level-programming/9.png'
import Img11 from '../../public/blog/using-llms-for-super-high-level-programming/11.png'
import Img12 from '../../public/blog/using-llms-for-super-high-level-programming/12.png'
import Img16 from '../../public/blog/using-llms-for-super-high-level-programming/16.png'

const UsingLlmsForSuperHighLevelProgramming = () => (
	<>
		<Navbar />
		<Container>
			<TITLE>{`Using LLMs for Super High Level Programming`}</TITLE>
			<Q>
				{`Thanks to Antoni Kiszka and kryptopaul for review and
					feedback.`}
			</Q>
			<H1>{`Introduction`}</H1>
			<P>
				{`I recently went on a journey to explore using large language
					models as programming languages. It's worth mentioning at
					the beginning that using LLMs as programming languages is
					NOT equal to using them to write code. The idea is that your
					 `}{' '}
				<I>prompt</I> {` is the "coding" part of it.`}
			</P>
			<P>
				{`Wikipedia defines a programming language as`}{' '}
				<I>a system of notation for writing computer programs.</I>{' '}
				{` In this article, I
					will be exploring Super High Level Programming (SHLP) using
					LLMs. In case you're wondering, yes the term is totally
					made-up.`}
			</P>
			<P>
				{`To make Super High Level Programming possible, we need to
					take a deep dive into *prompt engineering*. Prompt
					engineering is the process of structuring text that can be
					interpreted and understood by a generative AI model. I am
					under the impression that it's often undermined by the
					developer community because of its gentle learning curve.
					Besides that, it doesn't require any programming knowledge
					or prior experience. It's more like a creative /
					experimentation process where you test what works for your
					needs and what doesn't.`}
			</P>
			<IMG src={Img1} alt='Hacker news comment 1' />
			<IMG src={Img2} alt='Hacker news comment 2' />
			<P>
				{`OpenAI's ChatGPT is at the at the front of the AI hype
					train. They are probably the best argument in defence of
					prompt engineering, as the ChatGPT product was made viable
					by adjusting their language models with according prompts.`}
			</P>
			<P>{`Don't believe me? Just take a look at this:`}</P>
			<IMG
				src={Img3}
				alt='GPT-4 in playground vs in ChatGPT comparison'
			/>
			<P>
				<I>
					{`On the left: OpenAI Playground with GPT-4 model. On the
						right: ChatGPT running GPT-4 model.`}

					<br />
					{`Yes, the success
						of ChatGPT is vastly due to prompt engineering.`}
				</I>
			</P>
			<P>
				{`To make Super High Level Programming possible, we should shift our mindsets towards creativity and experimentation, as the concept is still highly unpredictable.`}
			</P>
			<H2>{`Testing GPT language models for Super High Level Programming`}</H2>
			<P>{`The first thing that came to my mind in terms of potential limitations of my idea are the non-deterministic nature of LLMs and hallucinations. The thing is models are currently not great at providing exactly the same response multiple times and might provide untrue information.`}</P>
			<P>
				{`I span up Python and got an OpenAI API key. All of the code I wrote for these tests is available on`}{' '}
				<A externalHref='https://github.com/karolproksa/llm-programming'>
					my GitHub
				</A>{' '}
				{`(it is very chaotic, though).`}
			</P>
			<P>
				{`I started with a control trial. I used gpt-3.5-turbo with
					the default settings. I gave it a creative prompt to make it
					a little harder. The creative prompt I used was:`}
			</P>
			<CODE>{`Write a poem about mountains. Make it 8 lines long`}</CODE>
			<P>{`As expected, on the 10 runs I did, it proved to be 0% deterministic. Onward.`}</P>
			<P>
				{`The second trial involved adjusting the two parameters that would have the most impact on the results - temperature and top_p. In short, they adjust how much risks should the model take (or how creative it should be). From my previous experience with LLMs and knowledge, I used the values that would theoretically make the output most predictable. With `}
				<INLINECODE>{`top_p=0`}</INLINECODE>
				{`and `}
				<INLINECODE>{`temperature=0`}</INLINECODE>
				{`, I ran the same test and got a 91.6% deterministic result. While still far from perfect, it had the potential to be actually usable.`}
			</P>

			<P>
				{`In the third attempt, I set `}{' '}
				<INLINECODE>{`presence_penalty=2`}</INLINECODE>
				{`and run the same test. Now it turned out to be exactly 100% deterministic. I ran the test another 100 times to make sure it's not just luck, but this attempt also proved to be 100% deterministic.`}
			</P>
			<table className='w-full table-auto border-neutral-200 rounded-lg border-2 border-separate border-spacing-2 text-left'>
				<thead>
					<tr>
						<th>Model</th>
						<th>gpt-3.5-turbo</th>
						<th>gpt-3.5-turbo</th>
						<th>gpt-3.5-turbo</th>
						<th>gpt-4</th>
						<th>gpt-3.5-turbo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>temperature </td>
						<td>{` 1 (default)`}</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>top_p </td>
						<td>{` 1 (default)`}</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>presence_penalty </td>
						<td>{` 0 (default)`}</td>
						<td>{` 0 (default)`}</td>
						<td>2</td>
						<td>2</td>
						<td>2</td>
					</tr>
					<tr>
						<td>Task </td>
						<td>creative</td>
						<td>creative</td>
						<td>creative</td>
						<td>creative</td>
						<td>non-creative</td>
					</tr>
					<tr>
						<td>---</td>
						<td>---</td>
						<td>---</td>
						<td>---</td>
						<td>---</td>
						<td>---</td>
					</tr>
					<tr>
						<td>Determinism</td>
						<td>0%</td>
						<td>91.6%</td>
						<td>100%</td>
						<td>64.1%</td>
						<td>80%</td>
					</tr>
				</tbody>
			</table>
			<P>
				{`However, when I changed the model to gpt-4, its determinism
					was at about 64.1%. Fiddling with different parameters did
					not exactly help. I realised that chasing the determinism
					that way was a problem I couldn't solve right now.`}{' '}
				<A externalHref='https://152334h.github.io/blog/non-determinism-in-gpt-4/'>
					This article helped me understand why
				</A>
				.
			</P>
			<P>{`The best answer I found is that gpt-4 itself is a more complicated model with more parameters in its architecture and therefore it's harder to force it to be deterministic.`}</P>
			<P>
				{`What actually made a difference was prompt engineering. I changed the prompt to `}{' '}
				<INLINECODE>
					{`What year was Sun Tzu born? Reply with just the number
						without any additional characters.`}
				</INLINECODE>
				{` (as an example of a non-creative, factual prompt) and the output was exactly the same each time.`}
			</P>
			<H2>Using LLMs as near-infinite databases</H2>
			<P>
				{`What if we tried writing a function that returns the year of
					birth of`}{' '}
				<I>any</I>{' '}
				{`historical figure. A program that has
					access to a huge database with (almost) all of humanity's
					knowledge?`}
			</P>
			<P>
				{`Let's try that in practice. I coded a simple function that returns the year a historical figure was born. The function has one parameter, called`}{' '}
				<INLINECODE>figure</INLINECODE>
				{`. What's interesting is the fact that the format of input doesn't matter. The LLM is easily able to understand what data we want to query. So`}
				<INLINECODE>John Doe</INLINECODE> {` is just as valid as `}{' '}
				<INLINECODE>john doe</INLINECODE>,
				<INLINECODE>Doe John</INLINECODE> or
				<INLINECODE>doe john</INLINECODE>.
			</P>
			<IMG src={Img4} alt='getting identical output' />
			<P>
				{`From my testing, using nicknames of historical figures
					didn't really work, because these could be associated with
					different people (in result returning different years of
					birth).`}
			</P>
			<H1>{`Real world projects with Super High Level Programming`}</H1>
			<P>
				{`Because large language models are trained on huge amounts of
					data, they also include a lot of software inside.`}
			</P>
			<P>{`Let's test out some 100% LLM-based programs.`}</P>
			<H2>{`Calculator`}</H2>
			<P>
				{`Something easy to start off the tests. Of course it didn't
					encounter any problems with that input.`}
			</P>
			<IMG src={Img7} alt='calculator' />
			<P>{`But I imagine that it's a part of its dataset. What if I made the input so complex that there's virtually no chance it has been a part of the dataset?`}</P>
			<IMG src={Img11} alt='harder calculator' />
			<P>{`It's wrong. On every attempt I tried it would return a number that's wrong, in a slightly different way. That's a limitation of LLMs. I'm sure not all projects require computing 49-character long numbers, so let's try using it for different tasks.`}</P>
			<H2>{`Invert binary tree`}</H2>
			<P>{`A coding interview classic. My code (if you consider Super High Level Programming to be a real thing) for this test was: `}</P>
			<CODE>
				{`You are a function that is able to invert binary trees. You will receive input in the form of an array with numbers. Each following number corresponds to the next node in the tree.`}
				<br />
				<br />
				{`Return the inverted tree in the form of: [a, b, c, d, ...]`}
			</CODE>
			<P>
				<I>
					{' '}
					{`I used the `}
					<A externalHref='https://leetcode.com/problems/invert-binary-tree/description'>
						leetcode notation
					</A>
					{` for representing binary trees`}
				</I>
			</P>
			<P>
				{`
					And it works perfectly! The model actually managed to do
					that. One thing I noticed while trying to make this work,
					you need to be super accurate about what you want to
					achieve. It's a lot like you would actually be... coding.`}
			</P>
			<IMG src={Img6} alt='binary tree' />
			<H2>Markdown to HTML parser</H2>
			<P>{`Now it's time for something actually useful in real world scenarios.`}</P>
			<CODE>{`You are a Markdown parser. You will receive text in correct Markdown syntax. Parse it to HTML.`}</CODE>
			<br />
			<IMG src={Img8} alt='markdown parser' />
			<P>{`As you can see, all of the examples were easily managed by the model. The programs I requested are quite generic, so I'm sure GPT-4 has a lot of these in its dataset. How about I create something that's a little abstract and surely doesn't exist in the dataset?`}</P>
			<H2>{`New symbol-based language interpreter`}</H2>
			<P>{`This is a challenge for the model. I tried to make the code as creative and unpredictable as possible. I am quite positive that such notation for what's happening on farms did not exist before.`}</P>
			<CODE>
				{`You are an interpreter for a new symbol-based language that describes what's happening on the farm.`}{' '}
				<br />
				{`() means that a hen lay an egg.`} <br />
				{` \/ means that the crow ate seeds from the field `} <br />
				{`. means that time has passed. `} <br />
				{` Each of these actions passes exactly 1 hour of time. `}{' '}
				<br /> <br />
				{` We always start the day at 8 AM. `} <br /> <br />
				{` For a given input in the form of a string of these characters, return an array with such data structure: [{time: <current_time>, action: <action>}, ...]`}
			</CODE>
			<br />
			<IMG src={Img9} alt='farm example' />
			<P>
				{`To my astonishment, the results turned out great. The model easily understood the prompt and processed it exactly as desired. Did you see that I made a mistake before the last character in my input string? The program chose to interpret `}
				<INLINECODE>\</INLINECODE> as <INLINECODE>\/</INLINECODE>
				{` to complete its operation rather than throw an error. Let's see how it does when I ask it to throw errors.`}
			</P>
			<P>{`With a modified prompt, I made it throw errors. It is worth noting that making it work that way required a fair amount of prompt engineering. At first, the model would just throw an error inside of the data structure, which wasn't my intent.`}</P>
			<CODE>
				{`You are an interpreter for a new symbol-based language that describes what's happening on the farm.`}{' '}
				<br />
				{`() means that a hen lay an egg.`} <br />
				{` \/ means that the crow ate seeds from the field `} <br />
				{`. means that time has passed. `} <br />
				{` Each of these actions passes exactly 1 hour of time. `}{' '}
				<br /> <br />
				{` We always start the day at 8 AM. `} <br /> <br />
				{`Make sure that all characters in notation are correct, if the input is missing one character, for example it's "\" instead of "\/" or "(" instead of  "()", throw an error saying: "Error: Incorrect notation".`}{' '}
				<br /> <br />
				{`If there are any errors in the input string, return "Error: Incorrect notation" instead of analysing the text.`}
				{` For a given input in the form of a string of these characters, return an array with such data structure: [{time: <current_time>, action: <action>}, ...]`}
			</CODE>
			<br />
			<IMG src={Img16} alt='farm example with errors' />
			<H1>{`Potential vulnerabilities`}</H1>
			<P>{`Prompt hacking (or however you want to call it) is a big discussion right now in the AI space. Developers of LLMs have already started implementing solutions to the problems of malicious prompting.`}</P>
			<IMG src={Img12} alt='vulnerability' />
			<P>
				<I>{`Me trying to convince an AI program to write a manifesto`}</I>
			</P>
			<P>{`Even with these efforts, I'm sure that a right prompt injection would make the model act outside of the system prompt.`}</P>
			<P>{`Because of that, there is a risk associated with using LLMs that way in production, where a user might convince it to act out of the ordinary. It is important to keep that in mind when implementing SHLP to production systems.`}</P>
			<H1>Conclusion</H1>
			<P>{`After conducting these experiments I started thinking if using SHLP was actually viable in the real world. When the operating costs of LLMs go down, will it actually be the main method for processing data and accessing a near-infinite database?`}</P>
			<P>
				<b>{`For now, we know that:`} </b>
				<br />
				<ul className='list-disc ml-4'>
					<li>{`We can use LLMs as an near-infinite database`}</li>
					<li>{`We are able to get data in a consistent format to use for further manipulation`}</li>
					<li>{`LLMs can act as program functions (processing the input in a desired way), with a limitation of non-tokenised values (strings that the model sees for the first time)`}</li>
					<li>{`LLMs are not limited to functions included in the dataset, however they might encounter problems with processing unknown tokens`}</li>
				</ul>
			</P>
			<P>{`It's an area that certainly needs more exploration, but with time I believe that it could be the next step in developing software. An even higher level of abstraction which processes human language to computer instructions. We will have to wait to see how Super High Level Programming actually works in real world scenarios.`}</P>
		</Container>
	</>
)

export default UsingLlmsForSuperHighLevelProgramming
