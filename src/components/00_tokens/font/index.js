import { css } from "styled-components";

import OpenSansBold from "../../../assets/fonts/opensans_bold_macroman/OpenSans-Bold-webfont.woff";
import OpenSansRegular from "../../../assets/fonts/opensans_regular_macroman/OpenSans-Regular-webfont.woff";

const Font = css`
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
	}
`;

export default Font;
