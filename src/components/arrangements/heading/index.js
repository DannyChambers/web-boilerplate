import React from "react";
import styled, { css } from "styled-components";

const Heading = ({ level, alignment, children }) => {
	const tag = `h${level}`;

	return <El as={tag}>{children}</El>;
};

const El = styled.div`
	font-family: "Roboto, Arial, sans-serif";
	color: "black";
	text-align: ${({ alignment }) => alignment || "left"};
	${(level) =>
		(level =
			"1" &&
			css`
				font-size: 4.2rem;
				line-height: 4.8rem;
				margin-bottom: $spacing-double;
			`)}
	${(level) =>
		(level =
			"2" &&
			css`
				font-size: 3.6rem;
				line-height: 4rem;
				margin-bottom: $spacing-full;
			`)}
		${(level) =>
		(level =
			"3" &&
			css`
				font-size: 2.8rem;
				line-height: 3.4rem;
				margin-bottom: $spacing-full;
			`)}
		${(level) =>
		(level =
			"4" &&
			css`
				font-size: 2.4rem;
				line-height: 2.9rem;
				margin-bottom: $spacing-full;
			`)}
		${(level) =>
		(level =
			"5" &&
			css`
				font-size: 2rem;
				line-height: 2.4rem;
				margin-bottom: $spacing-full;
			`)};
`;

export default Heading;
