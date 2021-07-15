import React from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../../utilities";

import Paragraph from "../../01_arrangements/paragraph";

const RadiobuttonInput = (props) => {
	const ID = generateID();

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	const handleChange = (val) => {
		if (props.onChange) {
			props.onChange(val);
		}
	};

	const handleFocus = (val) => {
		if (props.onFocus) {
			props.onFocus(val);
		}
	};

	const handleBlur = (val) => {
		if (props.onBlur) {
			props.onBlur(val);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`radiobutton-input ${props.classes}`}
		>
			<div className='wrapper'>
				<label htmlFor={ID}>{props.label}</label>
				<input
					type='radio'
					id={ID}
					placeholder={placeholder}
					name={props.name}
					value={props.value}
					checked={props.selected}
					disabled={props.disabled}
					onChange={(e) => {
						handleChange(e.target.value);
					}}
					onFocus={(e) => {
						handleFocus(e.target.value);
					}}
					onBlur={(e) => {
						handleBlur(e.target.value);
					}}
				/>
			</div>
			{props.children}

			{(() => {
				if (props.fieldMessage) {
					return (
						<Paragraph level='3'>{props.fieldMessage}</Paragraph>
					);
				}
			})()}
		</El>
	);
};

const El = styled.div`
	min-height: var(--sizing-full);
	padding-top: var(--sizing-quarter);
	.wrapper {
		padding-left: calc(var(--sizing-half) + var(--spacing-half));
		position: relative;

		label {
			display: block;
			font-family: var(--body-font);
			font-size: var(--text-size-6);
			line-height: normal;
			cursor: pointer;
			max-width: 75ch; //Max 75 characters for optimum readability

			${(props) =>
				props.required &&
				css`
					:after {
						display: inline-block;
						padding: var(--spacing-quarter);
						content: "*";
						font-family: var(--body-font);
						font-size: 20px;
						color: var(--status--information);
					}
				`}
		}

		input {
			display: block;
			width: var(--sizing-half);
			height: var(--sizing-half);
			border: 1px solid var(--border-color-1);
			border-radius: var(--radius-half);
			line-height: var(--sizing-full);
			padding: 0 var(--spacing-full);
			position: absolute;
			top: calc(var(--spacing-quarter) - var(--spacing-eighth));
			left: 0;

			&:hover {
				border-color: var(--cta-primary);
			}

			&:focus {
				outline: var(--cta-primary--active);
				border-color: var(--cta-primary--active);
			}
		}
	}

	${(props) =>
		props.disabled &&
		css`
			label {
				cursor: not-allowed;
				pointer-events: none;
			}
			input {
				cursor: not-allowed;
				pointer-events: none;
			}
		`}

	.paragraph {
		padding: var(--spacing-half) 0 0 0;
		color: var(--status--information);
	}

	${(props) =>
		props.valid &&
		css`
			.paragraph {
				color: var(--status--valid);
			}

			.wrapper label:after {
				color: var(--status--valid);
			}
		`}

	${(props) =>
		props.warning &&
		css`
			.paragraph {
				color: var(--status--warning);
			}

			.wrapper label:after {
				color: var(--status--warning);
			}
		`}

	${(props) =>
		props.invalid &&
		css`
			.paragraph {
				color: var(--status--invalid);
			}

			.wrapper label:after {
				color: var(--status--invalid);
			}
		`}
`;

export default RadiobuttonInput;
