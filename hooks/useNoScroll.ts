import { useEffect } from "react";
export function useNoScroll(element: boolean) {
  useEffect(() => {
    const html = document.querySelector("html");
    if (element) {
      html?.setAttribute("style", "overflow:hidden");
    } else {
      html?.setAttribute("style", "");
    }
  }, [element]);
}
