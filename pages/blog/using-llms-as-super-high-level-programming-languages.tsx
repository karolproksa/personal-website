import React from 'react'
import Navbar from '../../components/Navbar'
import { A, H1, H2, H3, IMG, P, Q } from '../../components/BlogComponents'
import Container from '../../components/Container'

const UsingLlmsAsSuperHighLevelProgrammingLanguages = () => {
	return (
		<>
			<Navbar />
			<Container>
				<H1>Using LLMs as Super High Level Programming Languages</H1>
				<H2>It's a h2</H2>
				<H3>It's a h3</H3>
				<P>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
					veritatis nisi, molestias nemo aut similique at tempore a
					tenetur labore.
				</P>
				<Q>
					QUOTE: Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Alias beatae maiores id, molestias nisi labore quos
					laborum ex hic illo repellendus obcaecati deleniti quae
					consequuntur? Impedit neque accusamus incidunt eum.
				</Q>
				<A externalHref='asdas'>TEST</A>
				{/* <IMG
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
					alt='sda'
				/> */}
			</Container>
		</>
	)
}

export default UsingLlmsAsSuperHighLevelProgrammingLanguages
