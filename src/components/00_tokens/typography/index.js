import { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import OpenSansBold from "../../../assets/fonts/opensans_bold_macroman/OpenSans-Bold-webfont.woff";
import OpenSansRegular from "../../../assets/fonts/opensans_regular_macroman/OpenSans-Regular-webfont.woff";

const Typography = css`
	@font-face {
		font-family: "Open Sans Bold";
		src: url(${OpenSansBold}) format("woff");
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: "Open Sans Regular";
		src: url(${OpenSansRegular}) format("woff");
		font-weight: 300;
		font-style: normal;
	}

	:root {
		//Fonts --
		--heading-font: "Open Sans Bold", Arial, sans-serif;
		--body-font: "Open Sans Regular", Arial, sans-serif;
		font-size: 52.5%;

		//Font sizes --
		--text-size-1: 4.2rem;
		--line-height-1: 1.4em;
		--text-size-2: 3.6rem;
		--line-height-2: 1.4em;
		--text-size-3: 2.8rem;
		--line-height-3: 1.4em;
		--text-size-4: 2.4rem;
		--line-height-4: 1.4em;
		--text-size-5: 2rem;
		--line-height-5: 1.4em;
		--text-size-6: 1.8rem;
		--line-height-6: 1.4em;
		--text-size-7: 1.6rem;
		--line-height-7: 1.4em;
		--text-size-8: 1.4rem;
		--line-height-1: 1.4em;
	}

	@media (min-width: ${breakpoints.breakpoint3}px) {
		:root {
			font-size: 62.5%;
		}
	}
`;

export default Typography;
