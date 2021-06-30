import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../tokens/dimension";

const Layout = (props) => {
	return (
		<El {...props} data-testid='123abc'>
			{props.children}
		</El>
	);
};

const El = styled.div`
	display: grid;
	gap: var(--spacing-double);
	max-width: ${breakpoints.maximumpagewidth};
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.breakpoint3}) {
		${(props) =>
			props.grid === "cols_100" &&
			css`
				grid-template-columns: 1fr;
			`}
		${(props) =>
			props.grid === "cols_50_50" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

		${(props) =>
			props.grid === "cols_40_60" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

        ${(props) =>
			props.grid === "cols_60_40" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

        ${(props) =>
			props.grid === "cols_33_33_33" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

        ${(props) =>
			props.grid === "cols_25_25_25_25" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}
	}

	@media (min-width: ${breakpoints.breakpoint4}) {
		${(props) =>
			props.grid === "cols_50_50" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

		${(props) =>
			props.grid === "cols_40_60" &&
			css`
				grid-template-columns: 4.8fr 7.2fr;
			`}

        ${(props) =>
			props.grid === "cols_60_40" &&
			css`
				grid-template-columns: 7.2fr 4.8fr;
			`}

        ${(props) =>
			props.grid === "cols_33_33_33" &&
			css`
				grid-template-columns: 4fr 4fr 4fr;
			`}

        ${(props) =>
			props.grid === "cols_25_25_25_25" &&
			css`
				grid-template-columns: 3fr 3fr 3fr 3fr;
			`}
	}
`;

export default Layout;
