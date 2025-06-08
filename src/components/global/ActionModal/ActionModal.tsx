import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./_styles.module.scss";
import Modal from "@/components/core/Modal/Modal";
import {
  closeActionModal,
  selectActionState,
} from "@/store/app/global/actionModalSlice";
import Button from "@/components/core/Button";
import SuccessIcon from "@/assets/icons/success-icon";
import ErrorIcon from "@/assets/icons/error-icon";
import WarningIcon from "@/assets/icons/warning-icon";

const ActionModal: React.FC = () => {
  const {
    isOpen = false,
    type,
    title,
    content,
    callbackText,
    showCancelBtn,
    cancelText,
    extraButtonText,
    callbackBtnVariant,
    callback,
    isClosable,
  } = useSelector(selectActionState);
  const dispatch = useDispatch();

  const onCancel = useCallback(() => {
    dispatch(closeActionModal());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);

  const onConfirm = useCallback(async () => {
    if (callback) {
      setLoading(true);

      try {
        await Promise.resolve(callback());
      } catch (error) {
        console.error(error);
      } finally {
        onCancel();
        setLoading(false);
      }
    } else {
      onCancel();
    }
  }, [callback, onCancel]);

  return (
    <Modal
      open={isOpen}
      onClose={isClosable ? () => dispatch(closeActionModal()) : undefined}
      minWidth={400}
    >
      <div className={styles.action_modal}>
        <div className={styles.action_modal__header}>
          {type === "success" && <SuccessIcon />}
          {type === "error" && <ErrorIcon />}
          {type === "warning" && <WarningIcon />}
          <div>
            <p>{title}</p>
            <span>{content}</span>
          </div>
        </div>

        <div className={styles.action_modal__footer}>
          <Button
            variant={callbackBtnVariant}
            width="full"
            text={callbackText || "Confirm"}
            onClick={onConfirm}
            isLoading={loading}
            disabled={loading}
          />
          {showCancelBtn && (
            <Button
              variant="alt"
              width="full"
              text={cancelText || "No, Cancel"}
              onClick={onCancel}
            />
          )}
          {extraButtonText && (
            <Button width="full" variant="text" text={extraButtonText} />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ActionModal;
