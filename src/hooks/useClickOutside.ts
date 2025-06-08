import { useState, useEffect, useRef, createRef, useCallback } from "react";
import type { MutableRefObject } from "react";

type UseClickOutsideProps = {
  arrayLength?: number;
  onCloseFn?: () => void;
};

export const useClickOutside = ({
  arrayLength,
  onCloseFn,
}: UseClickOutsideProps = {}) => {
  const [open, setOpen] = useState(arrayLength ? -1 : false);

  const anchorRef = useRef<HTMLElement | null>(null);

  const dropdownRef = useRef<HTMLElement | null>(null);

  const dropdownListRef = useRef<MutableRefObject<HTMLElement>[]>([]);

  useEffect(() => {
    if (dropdownListRef.current.length !== arrayLength) {
      dropdownListRef.current = Array(arrayLength)
        .fill(null)
        .map((_, i) => dropdownListRef.current[i] || createRef());
    }
  }, [arrayLength]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (arrayLength) {
        const isOutsideDropdowns = !dropdownListRef.current.some((ref) =>
          ref.current?.contains(event.target as Node)
        );

        if (isOutsideDropdowns) {
          setOpen(-1);
          if (onCloseFn) {
            onCloseFn();
          }
        }
      } else {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          (anchorRef.current
            ? !anchorRef.current.contains(event.target as Node)
            : true)
        ) {
          setOpen(false);
          if (onCloseFn) {
            onCloseFn();
          }
        }
      }
    },
    [arrayLength, onCloseFn, anchorRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    open,
    setOpen,
    dropdownRef,
    dropdownListRef,
    anchorRef,
  };
};
