import React from "react";
import Color from "../../tokens/color/";

import PageSection from "./index.js";

export default {
	title: "Components/Arrangements/Page Section",
	component: PageSection,
	argTypes: {
		backgroundColor: {
			options: [
				`${Color.brandcolor1}`,
				`${Color.brandcolor2}`,
				`${Color.brandcolor3}`,
				`${Color.brandcolor4}`,
				`${Color.brandcolor5}`,
				`${Color.brandcolor6}`,
				`${Color.brandcolor7}`,
				`${Color.brandcolor8}`,
				`${Color.brandcolor9}`,
			],
			defaultValue: `${Color.brandcolor6}`,
			control: { type: "select" },
		},
		variant: {
			options: ["default", "full-page"],
			defaultValue: "default",
			control: { type: "select" },
		},
	},
};

const Template1 = (args) => {
	return <PageSection {...args}></PageSection>;
};

export const Default = Template1.bind({});
Default.args = {
	heading: "This is the Section heading",
	subheading: "This is the Section subheading",
};
