import React, { useCallback, useRef } from "react";
import ReactDom from "react-dom";
import { useNoScroll } from "@/hooks/useNoScroll";
import styles from "./_index.module.scss";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  noScroll?: boolean;
  zIndex?: number;
  maxWidth?: number;
  minWidth?: number;
  animate?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  noScroll = true,
  zIndex, // Set zIndex to control modal hierarchy, must be higher than 10000 for effect
  maxWidth,
  minWidth,
  animate,
}) => {
  useNoScroll({ watchedValue: noScroll && open });

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Still working on the fade-in and fade-out animation
  const handleCloseWithAnimation = useCallback(() => {
    if (onClose) {
      modalRef.current?.classList.add("fade-out");

      setTimeout(() => {
        modalRef.current?.classList.remove("fade-out");
        onClose();
      }, 400); // animation duration
    }
  }, [onClose]);

  if (!open) return null;

  return ReactDom.createPortal(
    <div ref={modalRef} className={open && animate ? `${styles.fade_in}` : ""}>
      <div
        className={`${styles.overlay_styles} overlay-bg`}
        style={{ zIndex }}
        onClick={animate ? handleCloseWithAnimation : onClose}
      ></div>
      <div
        className={`${styles.modal_styles} card-bg`}
        style={{ zIndex, maxWidth, minWidth }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
