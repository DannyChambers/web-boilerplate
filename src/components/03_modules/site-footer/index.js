import React from "react";
import styled, { css } from "styled-components";

import Paragraph from "../../01_arrangements/paragraph/";

const SiteFooter = (props) => {
	return (
		<El {...props} data-testid='123abc' className='site-footer'>
			{props.children}
			<Paragraph level='3' alignment='center'>
				&copy; Copyright 2021
			</Paragraph>
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-1);
	padding: var(--spacing-full);
	color: var(--text-color-light);

	.list {
		text-align: center;
		padding-bottom: var(--spacing-half);

		li {
			display: inline-block;
			margin: 0 var(--spacing-full);
		}
	}

	.paragraph {
		padding: 0;
	}
`;

export default SiteFooter;
