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
		//Functional palette --
		--text-color-dark: var(--brand-color-2);
		--text-color-light: var(--brand-color-9);
		--cta-primary: var(--brand-color-3);
		--cta-primary--active: var(--brand-color-4);
		--cta-secondary: var(--brand-color-5);
		--cta-secondary--active: var(--brand-color-6);
		color: var(--text-colour-dark);
	}
`;

export default Color;
