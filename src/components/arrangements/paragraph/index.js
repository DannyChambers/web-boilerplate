import React from "react";
import styled, { css } from "styled-components";

const Paragraph = (props) => {
	return <El {...props}>{props.text}</El>;
};

const El = styled.p`
	font-family: var(--body-font);
	color: var(--text-color-1);
	padding-bottom: var(--spacing-full);
	text-align: ${(props) => props.alignment};

	${(props) =>
		props.level === "1" &&
		css`
			font-size: 1.8rem;
			line-height: 2.4rem;
		`}

	${(props) =>
		props.level === "2" &&
		css`
			font-size: 1.6rem;
			line-height: 2rem;
		`}

	${(props) =>
		props.level === "3" &&
		css`
			font-size: 1.4rem;
			line-height: 1.8rem;
		`}
`;

export default Paragraph;
