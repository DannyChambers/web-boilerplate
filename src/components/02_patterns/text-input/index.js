import React from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../../utilities";

import Paragraph from "../../01_arrangements/paragraph";

const TextInput = (props) => {
	const ID = generateID();

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	const handleChange = (obj) => {
		if (props.onChange) {
			props.onChange(obj);
		}
	};

	const handleFocus = (obj) => {
		if (props.onFocus) {
			props.onFocus(obj);
		}
	};

	const handleBlur = (obj) => {
		if (props.onBlur) {
			props.onBlur(obj);
		}
	};

	return (
		<El {...props} data-testid='123abc' className='text-input'>
			<label htmlFor={ID}>{props.label}</label>

			<input
				type='text'
				id={ID}
				placeholder={placeholder}
				value={props.value}
				onChange={(e) => {
					handleChange({
						name: props.name,
						value: e.target.value,
						required: props.required,
						validPattern: props.validPattern,
					});
				}}
				onFocus={(e) => {
					handleFocus({
						name: props.name,
						value: e.target.value,
						required: props.required,
						validPattern: props.validPattern,
					});
				}}
				onBlur={(e) => {
					handleBlur({
						name: props.name,
						value: e.target.value,
						required: props.required,
						validPattern: props.validPattern,
					});
				}}
			/>
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
	position: relative;
	max-width: 75ch; //Max 75 characters for optimum readability

	label {
		display: block;
		font-family: var(--body-font);
		font-size: var(--text-size-6);
		line-height: var(--sizing-full);
		cursor: pointer;
	}

	${(props) =>
		props.usePlaceholder &&
		css`
			label {
				width: 0;
				height: 0;
				position: absolute;
				left: -9999px;
				overflow: hidden;
			}
			${(props) =>
				props.required &&
				css`
					:after {
						display: inline-block;
						padding: var(--spacing-quarter);
						content: "*";
						display: block;
						position: absolute;
						top: 0;
						right: var(--spacing-quarter);
						font-family: var(--body-font);
						font-size: 20px;
						color: var(--status--information);
					}
				`}
		`}

	${(props) =>
		props.required &&
		css`
			label {
				:after {
					display: inline-block;
					padding: var(--spacing-quarter);
					content: "*";
					font-family: var(--body-font);
					font-size: 20px;
					color: var(--status--information);
				}
			}
		`}

	input {
		display: block;
		width: 100%;
		border: 1px solid var(--border-color-1);
		border-radius: var(--radius-half);
		line-height: var(--sizing-full);
		padding: 0 var(--spacing-full);
		font-family: var(--body-font);
		font-size: var(--text-size-6);

		&:hover {
			border-color: var(--cta-primary);
		}

		&:focus {
			outline: var(--cta-primary--active);
			border-color: var(--cta-primary--active);
		}

		::-webkit-input-placeholder {
			color: var(--text-color-medium);
		}
		::-moz-placeholder {
			color: var(--text-color-medium);
		}
		:-ms-input-placeholder {
			color: var(--text-color-medium);
		}
		:-moz-placeholder {
			color: var(--text-color-medium);
		}
	}

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

			:after,
			label:after {
				color: var(--status--valid);
			}
		`}

	${(props) =>
		props.warning &&
		css`
			.paragraph {
				color: var(--status--warning);
			}

			:after,
			label:after {
				color: var(--status--warning);
			}
		`}

	${(props) =>
		props.invalid &&
		css`
			.paragraph {
				color: var(--status--invalid);
			}

			:after,
			label:after {
				color: var(--status--invalid);
			}
		`}
`;

export default TextInput;
