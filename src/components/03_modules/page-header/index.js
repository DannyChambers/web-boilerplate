import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import Logo from "../../02_patterns/logo/";
import PrimaryNavigation from "../../03_modules/primary-navigation/";

const PageHeader = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`page-header ${props.classes}`}
		>
			<Logo href='/' />
			<PrimaryNavigation />
			{props.children}
		</El>
	);
};

const El = styled.header`
	background: var(--brand-color-7);
	padding: var(--spacing-double);

	@media (min-width: ${breakpoints.breakpoint4}px) {
		.logo {
			float: left;
			margin: var(--spacing-full);
		}
	}
`;

export default PageHeader;
