import { useEffect } from "react";

export const useNoScroll = ({ watchedValue }: { watchedValue: boolean }) => {
  useEffect(() => {
    document.body.style.overflow = watchedValue ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [watchedValue]);
};
