import { createGlobalStyle } from "styled-components";

import Reset from "./reset/";
import Color from "./color/";
import Font from "./font/";
import Dimension from "./dimension/";
import Effect from "./effect/";

export default createGlobalStyle`
    ${Reset}
    ${Color}
    ${Font}
    ${Dimension}
    ${Effect}
`;
