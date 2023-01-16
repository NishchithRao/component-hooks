import { useEffect, useRef } from 'react';

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
