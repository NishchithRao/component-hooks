export type PositionTypes =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface PopoverProps {
  active?: boolean;
  position: PositionTypes;
  gap?: number;
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
