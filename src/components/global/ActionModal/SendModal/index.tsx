import Button from "@/components/core/Button";
import Modal from "@/components/core/Modal/Modal";
import styles from "../_styles.module.scss";
import WarningIcon from "@/assets/icons/warning-icon";

type SendModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  title?: string;
  content?: string;
  cancelText?: string;
  sendText?: string;
  onConfirm: () => void;
  isLoading?: boolean;
};

const SendModal = ({
  isOpen,
  onCancel,
  title = "Send Item?",
  content = "Are you sure you want to send this item?",
  cancelText,
  sendText,
  onConfirm,
  isLoading,
}: SendModalProps) => {
  return (
    <Modal open={isOpen} onClose={onCancel} maxWidth={400} minWidth={400}>
      <div className={styles.action_modal}>
        <div className={styles.action_modal__header}>
          <WarningIcon />
          <div>
            <p>{title}</p>
            <span>{content}</span>
          </div>
        </div>
        <div className={styles.action_modal__footer}>
          <Button
            variant={"main"}
            width="full"
            text={sendText || "Yes, Send"}
            onClick={onConfirm}
            isLoading={isLoading}
            disabled={isLoading}
          />
          <Button
            variant="grey"
            width="full"
            text={cancelText || "No, Cancel"}
            onClick={onCancel}
          />
        </div>
      </div>
    </Modal>
  );
};
export default SendModal;
