declare module "testcomp" {
  export default function testcomp(): void;
}

/**
 * This is a test component
 */
export { default as TimeSlotPicker } from "./src/TimeSlotPicker";
export type { IPickerProps } from "./src/types";
