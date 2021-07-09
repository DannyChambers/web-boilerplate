import React from "react";
import styled, { css } from "styled-components";

const SiteFooter = (props) => {
	return (
		<El {...props} data-testid='123abc' className='site-footer'>
			Site footer
			{props.children}
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-1);
	padding: var(--spacing-full);
	min-height: var(--spacing-double);
`;

export default SiteFooter;
