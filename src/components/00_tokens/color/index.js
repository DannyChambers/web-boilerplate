import { css } from "styled-components";

const Color = {
	brandcolor1: "#000000",
	brandcolor2: "#111111",
	brandcolor3: "#333333",
	brandcolor4: "#666666",
	brandcolor5: "#999999",
	brandcolor6: "#cccccc",
	brandcolor7: "#eeeeee",
	brandcolor8: "#f2f2f2",
	brandcolor9: "#ffffff",
	brandcolor10: "blue",
	brandcolor11: "green",
	brandcolor12: "orange",
	brandcolor13: "red",
};

export const CSSColor = css`
	:root {
		//Raw palette --
		--brand-color-1: ${Color.brandcolor1};
		--brand-color-2: ${Color.brandcolor2};
		--brand-color-3: ${Color.brandcolor3};
		--brand-color-4: ${Color.brandcolor4};
		--brand-color-5: ${Color.brandcolor5};
		--brand-color-6: ${Color.brandcolor6};
		--brand-color-7: ${Color.brandcolor7};
		--brand-color-8: ${Color.brandcolor8};
		--brand-color-9: ${Color.brandcolor9};
		--brand-color-10: ${Color.brandcolor10};
		--brand-color-11: ${Color.brandcolor11};
		--brand-color-12: ${Color.brandcolor12};
		--brand-color-13: ${Color.brandcolor13};
		//Functional palette --
		--text-color-dark: var(--brand-color-2);
		--text-color-light: var(--brand-color-9);
		--text-color-medium: var(--brand-color-6);
		--border-color-1: var(--brand-color-6);
		--cta-primary: var(--brand-color-3);
		--cta-primary--active: var(--brand-color-4);
		--cta-secondary: var(--brand-color-5);
		--cta-secondary--active: var(--brand-color-6);
		--status--information: var(--brand-color-10);
		--status--valid: var(--brand-color-11);
		--status--warning: var(--brand-color-12);
		--status--invalid: var(--brand-color-13);
		color: var(--text-colour-dark);
	}
`;

export default Color;
