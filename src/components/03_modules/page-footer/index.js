import React from "react";
import styled, { css } from "styled-components";

const PageFooter = (props) => {
	return (
		<El {...props} data-testid='123abc' className='page-footer'>
			Page footer
			{props.children}
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-7);
	padding: var(--spacing-double);
	min-height: 150px;
`;

export default PageFooter;
