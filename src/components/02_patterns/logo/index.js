import React from "react";
import styled, { css } from "styled-components";

const Logo = (props) => {
	let tag = "h1";

	if (props.href) {
		tag = "a";
	}

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`logo ${props.classes}`}
		>
			<svg viewBox='0 0 100 100'>
				<circle cx='50' cy='50' r='50' />
			</svg>
			<span>Company name</span>
		</El>
	);
};

const El = styled.div`
	stroke: red;
	fill: none;
	display: block;
	width: 75px;

	${(props) =>
		props.size === "small" &&
		css`
			width: 50px;
		`}

	${(props) =>
		props.size === "large" &&
		css`
			width: 100px;
		`}

    span {
		height: 0;
		width: 0;
		position: absolute;
		top: -9999px;
		overflow: hidden;
	}
`;

export default Logo;
