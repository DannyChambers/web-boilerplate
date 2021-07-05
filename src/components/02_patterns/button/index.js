import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
	const tag = props.href ? "a" : "button";

	return (
		<El as={tag} {...props} data-testid='123abc'>
			{props.text}
		</El>
	);
};

const El = styled.div`
	display: inline-block;
	font-size: var(--text-size-7);
	font-family: var(--heading-font);
	padding: 0 var(--spacing-full);
	text-align: "center";
	background: pink;
	color: var(--text-color-light);
	border: 1px solid var(--brand);

	${(props) =>
		props.variant === "secondary" &&
		css`
			margin: 0 auto; //If the paragraph is aligned center we need to align the object aswell as the text itself, as we have limited the width for optimum readabilty.
		`}
`;

export default Button;
