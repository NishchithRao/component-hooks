import { useState, useCallback, useEffect } from 'react';
import { useTrigger } from '../trigger/trigger';

export interface OverlayProps {
  brightness?: '0' | '2' | '4' | '6' | '8' | '10';
  active?: boolean;
  onStateChanged?: (active: boolean) => void;
}
export const useOverlay = ({
  brightness = '2',
  onStateChanged,
  active,
}: OverlayProps) => {
  const [open, setOpen] = useState(active);
  const [drawerPanelRef, setDrawerPanelRef] = useState<HTMLDivElement | null>(
    null
  );
  const [lastFocusedElement, setLastFocusedElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setOpen(active);
  }, [active]);

  useEffect(() => {
    if (open) {
      setLastFocusedElement(document.activeElement as HTMLElement);
      (document.activeElement as HTMLElement)?.blur?.();
    } else lastFocusedElement?.focus();
  }, [open]);

  const panelRef = useCallback(
    (ref: HTMLDivElement) => {
      if (ref) {
        setDrawerPanelRef(ref);
        const brightnessValue = (parseInt(brightness) / 10).toFixed(1);

        if (ref) {
          ref.style.position = 'absolute';
          ref.style.left = '0px';
          ref.style.top = '0px';
          ref.style.height = '100vh';
          ref.style.width = '100%';
          ref.style.backgroundColor = `rgba(0,0,0, ${brightnessValue})`;
          ref.style.visibility = 'hidden';
          ref.style.zIndex = '90';
        }
      }
    },
    [brightness]
  );

  const closeOverlay = (drawerPanelRef: HTMLDivElement | null) => {
    if (drawerPanelRef) {
      setTimeout(() => {
        drawerPanelRef.style.visibility = 'hidden';
        setOpen(false);
      }, 100);
    }
  };
  const keyListener = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        closeOverlay(drawerPanelRef);
        onStateChanged?.(false);
      }
    },
    [drawerPanelRef]
  );

  useEffect(() => {
    document?.addEventListener('keydown', keyListener);
    return () => {
      document?.removeEventListener('keydown', keyListener);
    };
  }, [drawerPanelRef, keyListener]);

  const trigger = useCallback(() => {
    setOpen(!open);

    onStateChanged?.(!open);

    if (drawerPanelRef) {
      if (!open) {
        drawerPanelRef.style.visibility = 'visible';
      } else {
        closeOverlay(drawerPanelRef);
      }
    }
  }, [drawerPanelRef, open]);

  useEffect(() => {
    if (drawerPanelRef) {
      drawerPanelRef?.addEventListener('click', trigger);
    }
  }, [drawerPanelRef, trigger]);

  const { triggerRef } = useTrigger({ callback: trigger });
  return { triggerRef, panelRef };
};
