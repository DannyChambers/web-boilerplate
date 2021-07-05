//Tokens
import GlobalStyle from "./components/00_tokens/global-style";
import Color from "./components/00_tokens/color/";
//Arrangements
import Layout from "./components/01_arrangements/layout/";
import PageSection from "./components/01_arrangements/page-section/";
import Heading from "./components/01_arrangements/heading/";
import Paragraph from "./components/01_arrangements/paragraph/";
//Patterns
import Button from "./components/02_patterns/button/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />

			<PageSection
				backgroundColor={Color.brandcolor6}
				variant='full-page'
				heading='This is the Section heading'
				subheading='This is the Section subheading'
			>
				<Layout grid='cols_50_50'>
					<div className='column'></div>
					<div className='column'>
						<Heading level='3' text='Heading text here..' />
						<Paragraph level='2' text='Paragraph text here..' />
						<Button text='A button Button' />
						<Button
							text='A link Button'
							href='https://www.yahoo.com/'
						/>
					</div>
				</Layout>
			</PageSection>
		</div>
	);
}

export default App;
