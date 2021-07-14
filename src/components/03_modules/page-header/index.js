import React from "react";
import styled, { css } from "styled-components";

import Logo from "../../02_patterns/logo/";

const PageHeader = (props) => {
	return (
		<El {...props} data-testid='123abc' className='page-header'>
			<Logo />
			{props.children}
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-7);
	padding: var(--spacing-double);
`;

export default PageHeader;
