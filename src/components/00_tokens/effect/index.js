import { css } from "styled-components";

const Effect = css`
	:root {
		//Transition --
		--transition-full: 0.4s;
		--transition-quarter: calc(--transition-full / 4);
		--transition-half: calc(--transition-full / 2);
		--transition-double: calc(--transition-full * 2);
		--transition-triple: calc(--transition-full * 3);
		--transition-quadruple: calc(--transition-full * 4);
		--transition-quintuple: calc(--transition-full * 5);
		--transition-sextuple: calc(--transition-full * 6);
		--transition-septuple: calc(--transition-full * 7);
		--transition-octuple: calc(--transition-full * 8);
		--transition-nonuple: calc(--transition-full * 9);
	}
	//Animation --
	//Fade in
	@keyframes fadeIn {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}
	.fade-in {
		animation: fadeIn --transition-double ease-in-out;
	}
`;

export default Effect;
