export type PositionTypes =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface PopoverProps {
  /**
   * Toggle state of the content visiblity
   */
  active?: boolean;
  /**
   * Position content around the trigger
   */
  position: PositionTypes;
  /**
   * Add space between the trigger and the popover
   */
  gap?: number;
  /**
   * Fires whenever the content visibility is toggled
   * @param active - boolean - state of the content
   * @returns {void}
   */
  onStateChanged?: (active: boolean) => void;
}

export type Positions = {
  [positon in PositionTypes]: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
};
