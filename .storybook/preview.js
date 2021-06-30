import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/tokens/global-style";

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
					"Arrangments",
					"Patterns",
					"Modules",
					"Pages",
				],
			],
		},
	},
};