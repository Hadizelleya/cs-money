import { useEffect } from "react";

export function useClickOutside(ref, onClickOutside, isMenuOpened) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    if (isMenuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
