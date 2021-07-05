import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/00_tokens/global-style";

addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: [
				"Introduction",
				"Components",
				[
					"About components",
					"Tokens",
					"Arrangements",
					[
						"Layout",
						"Page Section",
						"Heading",
						"Paragraph",
						"Button Group",
					],
					"Patterns",
					"Modules",
					"Pages",
				],
			],
		},
	},
};
