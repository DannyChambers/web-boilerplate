import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../00_tokens/dimension";

const Layout = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`layout ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.div`
	display: grid;
	gap: 0 var(--spacing-full);
	max-width: ${breakpoints.maximumpagewidth};
	margin: 0 auto;
	grid-template-columns: 1fr;

	.column {
		padding-bottom: var(--spacing-full);
	}

	@media (min-width: ${breakpoints.breakpoint3}) {
		${(props) =>
			props.grid === "50_50" &&
			css`
				grid-template-columns: 1fr 1fr;
			`}

		${(props) =>
			props.grid === "40_60" &&
			css`
				grid-template-columns: 4.8fr 7.2fr;
			`}

        ${(props) =>
			props.grid === "60_40" &&
			css`
				grid-template-columns: 7.2fr 4.8fr;
			`}

        ${(props) =>
			props.grid === "33_33_33" &&
			css`
				grid-template-columns: 4fr 4fr 4fr;
			`}

        ${(props) =>
			props.grid === "25_25_25_25" &&
			css`
				grid-template-columns: 3fr 3fr 3fr 3fr;
			`}
	}

	@media only screen and (min-width: ${breakpoints.breakpoint3}) and (max-width: ${breakpoints.breakpoint6}) {
		//If you have provided the 'breakdown' attribute to Layout, it will move to a 2x2 layout where appropriate.
		${(props) =>
			props.breakdown &&
			css`
				gap: 0 var(--spacing-double);

				.column {
					padding-bottom: var(--spacing-double);
				}

				${(props) =>
					props.grid === "50_50" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}

				${(props) =>
					props.grid === "40_60" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}

                ${(props) =>
					props.grid === "60_40" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}

                ${(props) =>
					props.grid === "33_33_33" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}

                ${(props) =>
					props.grid === "25_25_25_25" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}
			`}
	}
`;

export default Layout;
