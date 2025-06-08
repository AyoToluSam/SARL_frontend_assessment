import Button from "@/components/core/Button";
import Modal from "@/components/core/Modal/Modal";
import styles from "../_styles.module.scss";
import DeleteIcon from "@/assets/icons/delete-icon";

type DeleteModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  title?: string;
  content?: string;
  cancelText?: string;
  deleteText?: string;
  onConfirm: () => void;
  isLoading?: boolean;
};

const DeleteModal = ({
  isOpen,
  onCancel,
  title = "Delete Item?",
  content = "Are you sure you want to delete this item?",
  cancelText,
  deleteText,
  onConfirm,
  isLoading,
}: DeleteModalProps) => {
  return (
    <Modal open={isOpen} onClose={onCancel} maxWidth={400} minWidth={400}>
      <div className={styles.action_modal}>
        <div className={styles.action_modal__header}>
          <DeleteIcon />
          <div>
            <p>{title}</p>
            <span>{content}</span>
          </div>
        </div>
        <div className={styles.action_modal__footer}>
          <Button
            variant={"red"}
            width="full"
            text={deleteText || "Yes, Delete"}
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
export default DeleteModal;
