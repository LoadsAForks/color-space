import { ColorSpace } from "./types";

export interface HslSpace extends ColorSpace {
  rgb: (hsl: [number, number, number]) => [number, number, number];
}

declare module "./rgb" {
  interface RgbSpace {
    hsl: (rgb: [number, number, number]) => [number, number, number]
  }
}
declare const hsl: HslSpace;
export default hsl;
