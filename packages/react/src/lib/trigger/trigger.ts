import { useCallback, useEffect, useState } from 'react';

interface TriggerProps {
  callback: () => void;
}

export const useTrigger = ({ callback }: TriggerProps) => {
  const [drawerTriggerRef, setDrawerTriggerRef] =
    useState<HTMLButtonElement | null>(null);

  const triggerListener = useCallback(() => {
    callback();
  }, [callback]);

  const triggerRef = useCallback((ref: HTMLButtonElement) => {
    if (ref) {
      setDrawerTriggerRef(ref);
    }
  }, []);

  useEffect(() => {
    if (drawerTriggerRef) {
      drawerTriggerRef.addEventListener('click', triggerListener);
    }
    return () => {
      drawerTriggerRef?.removeEventListener('click', triggerListener);
    };
  }, [drawerTriggerRef, triggerListener]);
  return { triggerRef };
};
