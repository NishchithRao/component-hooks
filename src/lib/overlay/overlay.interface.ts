export interface OverlayProps {
  /**
   * Set the overlay intensity / background color. 0 will be white and 10 will be black
   */
  brightness?: '0' | '2' | '4' | '6' | '8' | '10';
  /**
   * Programatically control the overlay. Determines whether an overlay is open or closed.
   */
  active?: boolean;
  /**
   * Callback fired when an overlay is open/closed.
   * @param active - The state of the overlay
   */
  onStateChanged?: (active: boolean) => void;
}
