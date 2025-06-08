import { CustomComponentProps } from "@/components/core/Form/FileUpload";
import styles from "./_styles.module.scss";
import { Trash } from "lucide-react";
import {
  fileTypes,
  getFileTypeIcon,
} from "@/components/core/Form/FileUpload/Uploader/data";
import { startCase } from "lodash";

const Uploader = ({
  fieldName,
  fieldLabel,
  uploadedFile,
  defaultFile,
  handleDragOver,
  handleDrop,
  removeImage,
  isDisabled,
  withoutLabel,
  required,
  allowedSize,
  allowedFileTypes,
}: CustomComponentProps) => {
  const activeFile = uploadedFile ?? defaultFile;

  const readableFileTypes = allowedFileTypes?.map((f) => fileTypes[f]);

  return activeFile ? (
    <div className={styles.uploaded}>
      <div className={styles.label_group}>
        <h4>
          {getFileTypeIcon(activeFile?.type)}
          {activeFile?.name}
        </h4>
      </div>
      <Trash
        size={22}
        className={`${styles.clear} ${isDisabled ? styles.disabled : ""}`}
        onClick={() => {
          if (isDisabled) {
            return;
          } else {
            removeImage();
          }
        }}
      />
    </div>
  ) : (
    <div
      className={styles.upload}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label htmlFor={fieldName}>Select File...</label>
      <div className={styles.info}>
        {!withoutLabel && (
          <p className={styles.show_label}>
            {fieldLabel || startCase(fieldName)}
            {required && <span>*</span>}
          </p>
        )}
        <p className={styles.drag}>Drag and drop supported.</p>
        <span
          className={"truncate"}
          data-title={
            readableFileTypes && readableFileTypes.join(", ").length > 48
              ? `Max Size: ${
                  allowedSize < 1
                    ? `${allowedSize * 1000}KB`
                    : `${allowedSize}MB`
                }. Supported types: ${readableFileTypes?.join(", ")}`
              : undefined
          }
        >
          {`Max Size: ${
            allowedSize < 1 ? `${allowedSize * 1000}KB` : `${allowedSize}MB`
          }. Supported types: ${readableFileTypes?.join(", ")}`}
        </span>
      </div>
    </div>
  );
};

export default Uploader;
