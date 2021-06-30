//Tokens
import GlobalStyle from "./components/tokens/global-style";
import Color from "./components/tokens/color/";
//Arrangements
import Layout from "./components/arrangements/layout/";
import PageSection from "./components/arrangements/page-section/";
import Heading from "./components/arrangements/heading/";
import Paragraph from "./components/arrangements/paragraph/";

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
					</div>
				</Layout>
			</PageSection>
		</div>
	);
}

export default App;
