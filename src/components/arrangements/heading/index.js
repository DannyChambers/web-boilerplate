import React from "react";
import styled, { css } from "styled-components";

const Heading = (props) => {
	const tag = `h${props.level}`;

	return (
		<El as={tag} {...props} data-testid='123abc'>
			{props.text}
		</El>
	);
};

const El = styled.div`
	font-family: var(--heading-font);
	color: var(--text-color-1);
	padding-bottom: var(--spacing-full);
	text-align: ${(props) => props.alignment};

	${(props) =>
		props.level === "1" &&
		css`
			font-size: 4.2rem;
			line-height: 4.8rem;
			padding-bottom: var(--spacing-double);
		`}

	${(props) =>
		props.level === "2" &&
		css`
			font-size: 3.6rem;
			line-height: 4rem;
		`}

	${(props) =>
		props.level === "3" &&
		css`
			font-size: 2.8rem;
			line-height: 3.4rem;
		`}

	${(props) =>
		props.level === "4" &&
		css`
			font-size: 2.4rem;
			line-height: 2.9rem;
		`}

	${(props) =>
		props.level === "5" &&
		css`
			font-size: 2rem;
			line-height: 2.4rem;
		`};
`;

export default Heading;
