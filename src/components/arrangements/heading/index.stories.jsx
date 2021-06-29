import React from "react";

import Heading from "./index.js";
import Paragraph from "../paragraph/index.js";

export default {
	title: "Components/Arrangements/Heading",
	component: Heading,
	argTypes: {
		level: {
			options: ["1", "2", "3", "4", "5"],
			defaultValue: "1",
			control: { type: "select" },
		},
		alignment: {
			options: ["left", "right", "center"],
			defaultValue: "left",
			control: { type: "select" },
		},
	},
};

const Template1 = (args) => <Heading {...args} />;

const Template2 = (args) => {
	let paragraphLevel;

	switch (
		args.level //Map Heading to paragraph pairing
	) {
		case "2":
			paragraphLevel = "2";
			break;
		case "3":
			paragraphLevel = "2";
			break;
		case "4":
			paragraphLevel = "3";
			break;
		case "5":
			paragraphLevel = "3";
			break;
		default:
			paragraphLevel = "1";
			break;
	}

	return (
		<>
			<Heading level={args.level} text={args.headingtext} />
			<Paragraph level={paragraphLevel} text={args.paragraphtext} />
		</>
	);
};

export const Standalone = Template1.bind({});
Standalone.args = {
	text: "The quick brown fox jumps over the lazy dog",
};

export const Pairings = Template2.bind({});
Pairings.args = {
	headingtext: "The quick brown fox jumps over the lazy dog",
	paragraphtext:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor faucibus sapien eu consequat. Nulla semper lorem eget mauris congue maximus. Integer pulvinar massa et lectus rutrum rhoncus. Maecenas a ipsum a ex malesuada aliquet. Ut tempus cursus auctor. Mauris vitae congue purus. Fusce hendrerit volutpat metus, ac cursus arcu pharetra eu. Praesent malesuada libero non volutpat euismod. Nullam ultrices elit ac nunc porta placerat.",
};
