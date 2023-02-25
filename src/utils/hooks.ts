import { useEffect, useRef, useState } from 'react';

/**
 * Combine several refs into one ref. Useful to create internal refs for components and use them with a forward ref
 * @param refs - List of refs to be combined
 * @returns A combined ref
 */
export const useCombinedRefs = <ElementType>(
  ...refs: ((current: ElementType) => void)[]
) => {
  const targetRef = useRef<ElementType>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function' && targetRef.current) {
        ref(targetRef.current);
      }
    });
  }, [refs]);

  return targetRef;
};

export const convertToPixels = (value: number) => value + 'px';

/**
 * @param callback the function to be called when there's a change in the attributes provided
 * @param targetElement the element is to be observed
 * @param attributesFilter specific attributes to observe
 */
export const useMutationObserver = (
  callback: () => void,
  attributesFilter: string[],
  targetElement?: React.RefObject<HTMLElement>
): void => {
  useEffect(() => {
    // Observer a target element for changes in the attributes provided in the attributes filter
    const observer = new MutationObserver(callback);
    if (targetElement && targetElement.current) {
      observer.observe(targetElement.current, {
        attributes: true,
        attributeFilter: attributesFilter,
      });
    }
    return () => observer.disconnect();
  }, []);
};

/**
 * Use the escape key on an element to perform an action
 * @param element The root element upon which the event should be called
 * @param cb The callback to fire when the escape key is pressed.
 */
export const useEscapeKey = (
  element: HTMLElement | Document | null,
  cb: () => void
) => {
  useEffect(() => {
    const handler = (ev: Event) => {
      if ((ev as KeyboardEvent).key === 'Escape') {
        cb();
      }
    };
    element?.addEventListener('keydown', handler);
    return () => element?.removeEventListener('keydown', handler);
  }, [element]);
};

/**
 * Adds focus to the specified element when the state is true and returns the focus to the
 * previously focused element when the state is false
 * @param state A boolean property to toggle focus
 * @param element The Html element that should be focused when the state is true
 */
export const toggleFocus = <P extends HTMLElement>(
  state: boolean,
  element: P | null
) => {
  const [lastFocused, setLastFocused] = useState<HTMLElement>();
  useEffect(() => {
    if (state) {
      setLastFocused(document.activeElement as HTMLElement);
      element?.focus();
    } else {
      lastFocused?.focus?.();
    }
  }, [state]);
};

/**
 * Get a list of focusable elements
 * @param root The root ELement. An array this element's children will be returned
 * @returns Returns a list of elements that can be focused
 */
export const getFocusableELements = (root: HTMLElement | Document | null) => {
  const focusableSelectors = [
    'a[href]:not([tabindex^="-"])',
    'area[href]:not([tabindex^="-"])',
    'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
    'input[type="radio"]:not([disabled]):not([tabindex^="-"])',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    'iframe:not([tabindex^="-"])',
    'audio[controls]:not([tabindex^="-"])',
    'video[controls]:not([tabindex^="-"])',
    '[contenteditable]:not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
  ];
  return Array.from(
    root?.querySelectorAll(focusableSelectors.join(',')) || []
  ) as HTMLElement[];
};
