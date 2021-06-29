import GlobalStyle from "./components/tokens/global-style";

import Heading from "./components/arrangements/heading/";
import Paragraph from "./components/arrangements/paragraph/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Heading level='1' alignment='center' text='Heading text here..' />
			<Paragraph
				level='1'
				alignment='center'
				text='Heading text here..'
			/>
		</div>
	);
}

export default App;
