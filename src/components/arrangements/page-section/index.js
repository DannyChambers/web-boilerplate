import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../tokens/dimension";

import { lightOrDark } from "../../../utilities";

import Heading from "../../arrangements/heading";
import Paragraph from "../../arrangements/paragraph";

const PageSection = (props) => {
	return (
		<El {...props} data-testid='123abc'>
			{(() => {
				if (props.heading) {
					return (
						<Heading
							level='2'
							text={props.heading}
							alignment='center'
							className='page-section_title'
						/>
					);
				}
			})()}

			{(() => {
				if (props.subheading) {
					return (
						<Paragraph
							level='2'
							text={props.subheading}
							alignment='center'
							className='page-section_subtitle'
						/>
					);
				}
			})()}

			{props.children}
		</El>
	);
};

const El = styled.div`
	background: ${(props) => props.backgroundColor};
	padding: var(--spacing-full);

	${(props) => {
		if (
			props.backgroundColor &&
			lightOrDark(props.backgroundColor) === "dark"
		) {
			return css`
				color: var(--text-color-light);
			`;
		}
	}};

	.page-section_title {
		padding-bottom: var(--spacing-half);
	}

	.page-section_subtitle {
		padding-bottom: var(--spacing-full);
	}

	@media (min-width: ${breakpoints.breakpoint4}) {
		padding: var(--spacing-double);

		.page-section_subtitle {
			padding-bottom: var(--spacing-double);
		}
	}

	${(props) =>
		props.variant === "full-page" &&
		css`
			height: 100vh;
		`}
`;

export default PageSection;
