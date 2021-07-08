import React from "react";
import styled from "styled-components";

const Form = (props) => {
	return (
		<El {...props} data-testid='123abc' className='form'>
			{props.children}
		</El>
	);
};

export const Fieldset = (props) => {
	return (
		<fieldset {...props} className='fieldset'>
			{(() => {
				if (props.legend) {
					return <legend>{props.legend}</legend>;
				}
			})()}

			{props.children}
		</fieldset>
	);
};

const El = styled.form`
	padding: var(--spacing-full);

	fieldset {
		border: 1px solid var(--border-color-1);
		border-radius: var(--radius-half);
		padding: var(--spacing-double) var(--spacing-double) var(--spacing-full)
			var(--spacing-double);
		margin-bottom: var(--spacing-double);

		legend {
			padding: 0 var(--spacing-quarter);
			font-family: var(--body-font);
			font-size: var(--text-size-5);
			line-height: var(--line-height-5);
		}
	}
`;

export default Form;
