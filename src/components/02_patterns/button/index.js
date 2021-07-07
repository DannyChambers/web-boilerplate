import React from "react";
import styled, { css } from "styled-components";

import Icon from "../../02_patterns/icon/";

const Button = (props) => {
	const tag = props.href ? "a" : "button";

	console.log("props.icon: ", props.icon);

	return (
		<El as={tag} {...props} data-testid='123abc' className='button'>
			{(() => {
				if (props.icon && props.size === "small") {
					return <Icon graphic={props.icon} size='small' />;
				} else if (props.icon && props.size === "medium") {
					return <Icon graphic={props.icon} size='medium' />;
				} else if (props.icon && props.size === "large") {
					return <Icon graphic={props.icon} size='large' />;
				}
			})()}
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

	${(props) =>
		props.size === "small" &&
		css`
			padding: 0 var(--spacing-full);
			font-size: var(--text-size-8);
			line-height: calc(var(--sizing-half) + var(--sizing-quarter));
		`}

    ${(props) =>
		props.size === "large" &&
		css`
			padding: 0 var(--spacing-triple);
			font-size: var(--text-size-6);
			line-height: calc(var(--sizing-full) + var(--sizing-quarter));
			border-radius: var(--radius-triple);
		`}

    ${(props) =>
		props.icon &&
		css`
			position: relative;
			padding-left: calc(var(--spacing-double) + var(--spacing-half));

			.icon {
				position: absolute;
				top: var(--spacing-quarter);
				left: var(--spacing-half);

				svg path {
					fill: var(--text-color-light);
				}
			}
		`}


    ${(props) =>
		props.icon &&
		props.size === "medium" &&
		css`
			padding-left: calc(var(--spacing-triple) + var(--spacing-quarter));

			.icon {
				left: calc(var(--spacing-half) + var(--spacing-eighth));
			}
		`}

    ${(props) =>
		props.icon &&
		props.size === "large" &&
		css`
			padding-left: calc(var(--spacing-quadruple) + var(--spacing-half));

			.icon {
				top: calc(var(--spacing-quarter) + var(--spacing-eighth));
				left: var(--spacing-full);
			}
		`}


    ${(props) =>
		props.icon &&
		props.variant === "secondary" &&
		css`
			.icon {
				svg path {
					fill: var(--text-color-dark);
				}
			}
		`}
`;

export default Button;
