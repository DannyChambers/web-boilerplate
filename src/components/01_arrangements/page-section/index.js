import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import { lightOrDark } from "../../../utilities";

import Heading from "../../01_arrangements/heading";
import Paragraph from "../../01_arrangements/paragraph";

const PageSection = (props) => {
	return (
		<El {...props} data-testid='123abc' className='page-section'>
			{(() => {
				if (props.heading) {
					return (
						<Heading
							level='2'
							alignment='center'
							className='page-section_title'
						>
							{props.heading}
						</Heading>
					);
				}
			})()}

			{(() => {
				if (props.subheading) {
					return (
						<Paragraph
							level='2'
							alignment='center'
							className='page-section_subtitle'
						>
							{props.subheading}
						</Paragraph>
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
