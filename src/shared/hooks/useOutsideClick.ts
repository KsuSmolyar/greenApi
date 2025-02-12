import { useCallback, useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const domRef = useRef<T>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        e.target &&
        domRef.current &&
        !domRef.current.contains(e.target as Node)
      ) {
        callback();
        return;
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return domRef;
}
