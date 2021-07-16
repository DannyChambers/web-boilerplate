import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../../utilities";

import Paragraph from "../../01_arrangements/paragraph";
import TextInput from "../../02_patterns/text-input";

const SelectInput = (props) => {
	const [selected, setSelected] = useState(null);
	const [fieldMessage, setFieldMessage] = useState(null);
	const [valid, setValid] = useState(null);
	const ID = generateID();

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	useEffect(() => {
		if (props.fieldMessage) {
			setFieldMessage(props.fieldMessage);
		}
		if (props.valid) {
			setValid(true);
		} else if (props.invalid) {
			setValid(false);
		} else {
			setValid(null);
		}
	}, [props.fieldMessage, props.valid]);

	const handleChange = (val) => {
		console.log("obj.value: ", val);
		if (
			(props.required && !val) ||
			(props.required && val === "") ||
			(props.required && val === "Other")
		) {
			setFieldMessage("This field is required");
			setValid(false);
			setSelected(val);
		} else if (val === "Other") {
			setSelected(val);
		} else {
			setFieldMessage(props.fieldMessage);
			setValid(true);
			setSelected(val);
		}

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
			valid={valid}
			className={`select-input ${props.classes}`}
		>
			<label htmlFor={ID}>{props.label}</label>
			<select
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
			>
				{(() => {
					if (props.usePlaceholder) {
						return (
							<option value={props.label}>{props.label}</option>
						);
					}
				})()}

				{props.options.map((option, index) => {
					return (
						<option value={option} key={`_${index}`}>
							{option}
						</option>
					);
				})}
			</select>
			{(() => {
				if (props.fieldMessage) {
					return <Paragraph level='3'>{fieldMessage}</Paragraph>;
				}
			})()}
			{(() => {
				if (selected == "Other") {
					return (
						<TextInput
							label='Please specify..'
							name={`${props.name}_other`}
							onChange={handleChange}
						/>
					);
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

			.text-input label:after {
				display: none;
			}
		`}

	select {
		display: block;
		width: 100%;
		border: 1px solid var(--border-color-1);
		border-radius: var(--radius-half);
		height: var(--sizing-full);
		line-height: var(--sizing-full);
		padding: 0 var(--spacing-triple) 0 var(--spacing-full);
		font-family: var(--body-font);
		font-size: var(--text-size-6);
		-webkit-appearance: none;
		-moz-appearance: none;
		background: white;
		background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
		background-repeat: no-repeat;
		background-position-x: 99%;
		background-position-y: 10px;

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
			select {
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
				color: var(--status--success);
			}

			:after,
			label:after {
				color: var(--status--success);
			}
		`}

	${(props) =>
		props.valid === true &&
		css`
			.paragraph {
				color: var(--status--success);
			}

			:after,
			label:after {
				color: var(--status--success);
			}
		`}

	${(props) =>
		props.valid === false &&
		css`
			.paragraph {
				color: var(--status--error);
			}

			:after,
			label:after {
				color: var(--status--error);
			}
		`}
`;

export default SelectInput;
