import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
	const tag = props.href ? "a" : "button";

	return (
		<El as={tag} {...props} data-testid='123abc' className='button'>
			{props.text}
		</El>
	);
};

const El = styled.div`
	display: inline-block;
	font-size: var(--text-size-7);
	line-height: var(--sizing-full);
	font-family: var(--heading-font);
	text-transform: uppercase;
	padding: 0 var(--spacing-double);
	text-align: center;
	border-radius: var(--radius-double);
	text-decoration: none;
	cursor: pointer;
	background-color: var(--cta-primary);
	border: 2px solid var(--cta-primary);
	color: var(--text-color-light);
	transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
		color 0.4s ease-in-out;

	&:hover,
	&:active {
		background: var(--cta-primary--active);
		border-color: var(--cta-primary--active);
	}

	${(props) =>
		props.variant === "secondary" &&
		css`
			background-color: var(--cta-secondary);
			border: 2px solid var(--cta-secondary);
			color: var(--text-color-dark);

			&:hover,
			&:active {
				background: var(--cta-secondary--active);
				border-color: var(--cta-secondary--active);
				color: var(--text-color-dark);
			}
		`}
`;

export default Button;
