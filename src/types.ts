export interface IPickerProps {
  /**
   * The start time of the time slot picker
   * @default 9:00 AM
   * @example 9:00 AM
   */
  weekDayFromTime: string;
  /**
   * The end time of the time slot picker
   * @default 5:00 PM
   * @example "5:00 PM"
   */
  weekDayToTime: string;
  /**
   * To display the resulting time slot
   * @example slotResult={slot => {setSelectedTimeSlot(slot)}}
   */
  weekendFromTime: string;
  weekendToTime: string;
  slotResult: (slot: string) => void;
}
