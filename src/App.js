//Tokens
import GlobalStyle from "./components/00_tokens/global-style";

import TextInput from "./components/02_patterns/text-input/";
import TextareaInput from "./components/02_patterns/textarea-input/";
// import SelectInput from "./components/02_patterns/select-input/";
import CheckboxInput from "./components/02_patterns/checkbox-input/";
import RadiobuttonInput from "./components/02_patterns/radiobutton-input/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<TextInput
				label='cccccc'
				fieldMessage='This field is required'
				required
				invalid
			/>
			<TextInput
				label='cccccc'
				usePlaceholder
				fieldMessage='This field is required'
				required
				invalid
			/>
			<TextareaInput
				label='cccccc'
				fieldMessage='This field is required'
				required
				invalid
			/>
			<TextareaInput
				label='cccccc'
				usePlaceholder
				fieldMessage='This field is required'
				required
				invalid
			/>
			{/* <SelectInput
				label='cccccc'
				usePlaceholder
				fieldMessage='This field is required'
                                required
				invalid
			/> */}
			<CheckboxInput
				label='cccccc'
				usePlaceholder
				fieldMessage='This field is required'
				required
				invalid
			/>
			<RadiobuttonInput
				label='cccccc'
				usePlaceholder
				fieldMessage='This field is required'
				required
				invalid
			/>
		</div>
	);
}

export default App;
