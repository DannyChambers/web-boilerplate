import { css } from "styled-components";

const Color = css`
	:root {
		//Raw palette --
		--brand-color-1: #000000;
		--brand-color-2: #111111;
		--brand-color-3: #333333;
		--brand-color-4: #666666;
		--brand-color-5: #999999;
		--brand-color-6: #cccccc;
		--brand-color-7: #eeeeee;
		--brand-color-8: #f2f2f2;
		--brand-color-9: #ffffff;
		//Functional palette --
		--text-color-1: --brand-color-2;
		--text-color-2: --brand-color-9;
	}
`;

export default Color;
