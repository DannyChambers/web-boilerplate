import React from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../../utilities";

import Paragraph from "../../01_arrangements/paragraph";

const CheckboxInput = (props) => {
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
			<div className='wrapper'>
				<label htmlFor={ID}>{props.label}</label>
				<input
					type='checkbox'
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
	max-width: 75ch; //Max 75 characters for optimum readability

	.wrapper {
		padding-left: calc(var(--sizing-full) + var(--spacing-half));
		position: relative;

		label {
			display: block;
			font-family: var(--body-font);
			font-size: var(--text-size-6);
			line-height: var(--sizing-full);
			cursor: pointer;

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
			width: var(--sizing-full);
			height: var(--sizing-full);
			border: 1px solid var(--border-color-1);
			border-radius: var(--radius-half);
			line-height: var(--sizing-full);
			padding: 0 var(--spacing-full);
			position: absolute;
			top: 0;
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

export default CheckboxInput;
