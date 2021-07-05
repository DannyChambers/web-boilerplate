import { createGlobalStyle } from "styled-components";

import Reset from "./reset/";
import { CSSColor } from "./color/";
import Font from "./font/";
import Dimension from "./dimension/";
import Effect from "./effect/";

export default createGlobalStyle`
    ${Reset}
    ${CSSColor}
    ${Font}
    ${Dimension}
    ${Effect}
`;
