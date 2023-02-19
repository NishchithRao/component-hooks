export interface OverlayProps {
  brightness?: '0' | '2' | '4' | '6' | '8' | '10';
  active?: boolean;
  onStateChanged?: (active: boolean) => void;
}
