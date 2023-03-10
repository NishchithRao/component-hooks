export interface UseDrawerProps {
  /**
   * Toggle how the content should appear. Vertical resembles an Accordion and Horizontal
   * resembles a Sidepanel
   */
  orientation: 'vertical' | 'horizontal';
  /**
   * Classname to be applied when an accordion is open
   */
  activeClassName?: string;
  /**
   * Programatically control the accordion. Determines whether an accordion is open or closed.
   */
  active?: boolean;
  /**
   * Callback fired when an accordion is open/closed.
   * @param state - The state of the accordion
   */
  onStateChange?: (state: boolean) => void;
}
