import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../../utilities";

import Paragraph from "../../01_arrangements/paragraph";

const TextInput = (props) => {
	const [fieldMessage, setFieldMessage] = useState(null);
	const [valid, setValid] = useState(null);
	const ID = generateID();

	useEffect(() => {
		if (props.fieldMessage) {
			setFieldMessage(props.fieldMessage);
		}
		if (props.valid === true) {
			setValid(true);
		} else if (props.valid === false) {
			setValid(false);
		} else {
			setValid(null);
		}
	}, [props.fieldMessage, props.valid]);

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

	const handleBlur = (val) => {
		if (props.required && !val) {
			setFieldMessage("This field is required");
			setValid(false);
		} else if (
			props.validPattern === "email" &&
			!/^\S+@\S+\.\S+$/.test(val)
		) {
			setFieldMessage(
				"Please ensure you have provided a valid email address."
			);
			setValid(false);
		} else if (
			props.validPattern === "phone" &&
			!/^[\d\(\)\-+]+$/.test(val)
		) {
			//Numbers and phone number symbols
			setFieldMessage(
				"Please ensure you have provided a valid phone number."
			);
			setValid(false);
		} else {
			setFieldMessage(props.fieldMessage);
			setValid(true);
		}

		if (props.onBlur) {
			props.onBlur(val);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className='text-input'
			valid={valid}
		>
			<label htmlFor={ID}>{props.label}</label>

			<input
				type='text'
				id={ID}
				placeholder={placeholder}
				name={props.name}
				value={props.value}
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
			{props.children}

			{(() => {
				if (fieldMessage) {
					return <Paragraph level='3'>{fieldMessage}</Paragraph>;
				}
			})()}
		</El>
	);
};

const El = styled.div`
	position: relative;

	label {
		display: block;
		font-family: var(--body-font);
		font-size: var(--text-size-6);
		line-height: var(--sizing-full);
		cursor: pointer;
		max-width: 75ch; //Max 75 characters for optimum readability
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
		props.valid === true &&
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
		props.valid === false &&
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
