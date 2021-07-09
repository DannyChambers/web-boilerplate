import React from "react";
import styled, { css } from "styled-components";

const Logo = (props) => {
	return (
		<El {...props} data-testid='123abc' className='logo'>
			<svg viewBox='0 0 100 100'>
				<circle cx='50' cy='50' r='50' />
			</svg>
		</El>
	);
};

const El = styled.div`
	stroke: red;
	fill: none;
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
`;

export default Logo;
