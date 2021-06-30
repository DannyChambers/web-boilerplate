import React from "react";

import Layout from "./index.js";

export default {
	title: "Components/Arrangements/Layout",
	component: Layout,
	grid: {
		options: [
			"container",
			"50_50",
			"40_60",
			"60_40",
			"33_33_33",
			"25_25_25_25",
		],
		defaultValue: "container",
		control: { type: "select" },
	},
};

const Template1 = () => (
	<Layout grid='cols_100'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_100 = Template1.bind({});

const Template2 = () => (
	<Layout grid='cols_50_50'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_50_50 = Template2.bind({});

const Template3 = () => (
	<Layout grid='cols_40_60'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_40_60 = Template3.bind({});

const Template4 = () => (
	<Layout grid='cols_60_40'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_60_40 = Template4.bind({});

const Template5 = () => (
	<Layout grid='cols_33_33_33'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_33_33_33 = Template5.bind({});

const Template6 = () => (
	<Layout grid='cols_25_25_25_25'>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
		<div
			className='column'
			style={{ height: "400px", background: "#eee" }}
		></div>
	</Layout>
);
export const cols_25_25_25_25 = Template6.bind({});
