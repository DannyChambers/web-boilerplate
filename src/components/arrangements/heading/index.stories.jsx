import React from "react";

import Heading from "./index.js";
import Paragraph from "../paragraph/index.js";

export default {
	title: "Components/Arrangements/Heading",
	component: Heading,
};

const Template1 = (args) => <Heading {...args} />;

const Template2 = (args) => {
	return (
		<>
			<Heading
				level='1'
				alignment={args.alignment}
				text='Heading level 1'
			/>
			<Heading
				level='2'
				alignment={args.alignment}
				text='Heading level 2'
			/>
			<Heading
				level='3'
				alignment={args.alignment}
				text='Heading level 3'
			/>
			<Heading
				level='4'
				alignment={args.alignment}
				text='Heading level 4'
			/>
			<Heading
				level='5'
				alignment={args.alignment}
				text='Heading level 5'
			/>
		</>
	);
};

const Template3 = (args) => {
	let paragraphLevel, paragraphText;

	switch (
		args.level //Map Heading to paragraph pairing
	) {
		case "2":
			paragraphLevel = "2";
			paragraphText =
				"Heading 2 is paired with Paragraph level 2. dolor sit amet, consectetur adipiscing elit. In in justo maximus, tincidunt purus sed, tincidunt massa. Nunc fermentum tincidunt hendrerit. Etiam eget est eget velit tincidunt vulputate. Mauris malesuada nulla nibh, vel convallis diam pellentesque vitae. Cras aliquet fermentum ligula in molestie. Aliquam laoreet felis pharetra, dapibus massa quis.";
			break;
		case "3":
			paragraphLevel = "2";
			paragraphText =
				"Heading 3 is paired with Paragraph level 2. dolor sit amet, consectetur adipiscing elit. In in justo maximus, tincidunt purus sed, tincidunt massa. Nunc fermentum tincidunt hendrerit. Etiam eget est eget velit tincidunt vulputate. Mauris malesuada nulla nibh, vel convallis diam pellentesque vitae. Cras aliquet fermentum ligula in molestie. Aliquam laoreet felis pharetra, dapibus massa quis.";
			break;
		case "4":
			paragraphLevel = "3";
			paragraphText =
				"Heading 4 is paired with Paragraph level 3. dolor sit amet, consectetur adipiscing elit. In in justo maximus, tincidunt purus sed, tincidunt massa. Nunc fermentum tincidunt hendrerit. Etiam eget est eget velit tincidunt vulputate. Mauris malesuada nulla nibh, vel convallis diam pellentesque vitae. Cras aliquet fermentum ligula in molestie. Aliquam laoreet felis pharetra, dapibus massa quis.";
			break;
		case "5":
			paragraphLevel = "3";
			paragraphText =
				"Heading 5 is paired with Paragraph level 3. dolor sit amet, consectetur adipiscing elit. In in justo maximus, tincidunt purus sed, tincidunt massa. Nunc fermentum tincidunt hendrerit. Etiam eget est eget velit tincidunt vulputate. Mauris malesuada nulla nibh, vel convallis diam pellentesque vitae. Cras aliquet fermentum ligula in molestie. Aliquam laoreet felis pharetra, dapibus massa quis.";
			break;
		default:
			paragraphLevel = "1";
			paragraphText =
				"Heading 1 is paired with Paragraph level 1. dolor sit amet, consectetur adipiscing elit. In in justo maximus, tincidunt purus sed, tincidunt massa. Nunc fermentum tincidunt hendrerit. Etiam eget est eget velit tincidunt vulputate. Mauris malesuada nulla nibh, vel convallis diam pellentesque vitae. Cras aliquet fermentum ligula in molestie. Aliquam laoreet felis pharetra, dapibus massa quis.";
			break;
	}

	return (
		<>
			<Heading
				level={args.level}
				alignment={args.alignment}
				text={`Heading level ${args.level}`}
			/>
			<Paragraph level={paragraphLevel} text={paragraphText} />
		</>
	);
};

export const Standalone = Template1.bind({});
Standalone.argTypes = {
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
};

Standalone.args = {
	text: "The quick brown fox jumps over the lazy dog",
};

export const AllHeadings = Template2.bind({});
AllHeadings.argTypes = {
	alignment: {
		options: ["left", "right", "center"],
		defaultValue: "left",
		control: { type: "select" },
	},
};

export const Pairings = Template3.bind({});
Pairings.argTypes = {
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
};
