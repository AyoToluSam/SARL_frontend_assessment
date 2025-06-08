import {
  File,
  FileArchive,
  FileImage,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import styles from "./_styles.module.scss";
import { AllowedMimeType } from "@/components/core/Form/FormElement/types";

const fileTypeIcons = {
  jpg: <FileImage size={32} className={styles.file_icon} />,
  jpeg: <FileImage size={32} className={styles.file_icon} />,
  png: <FileImage size={32} className={styles.file_icon} />,
  webp: <FileImage size={32} className={styles.file_icon} />,
  avif: <FileImage size={32} className={styles.file_icon} />,
  svg: <FileImage size={32} className={styles.file_icon} />,
  "svg+xml": <FileImage size={32} className={styles.file_icon} />,
  csv: <FileSpreadsheet size={32} className={styles.file_icon} />,
  pdf: <FileText size={32} className={styles.file_icon} />,
  zip: <FileArchive size={32} className={styles.file_icon} />,
  doc: <File size={32} className={styles.file_icon} />,
};

export const getFileTypeIcon = (type?: string) =>
  fileTypeIcons[type?.split("/")?.pop() as keyof typeof fileTypeIcons] ||
  fileTypeIcons.doc;

export const fileTypes: Record<AllowedMimeType, string> = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    ".pptx",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "application/vnd.rar": ".rar",
  "application/zip": ".zip",
  "text/csv": ".csv",
  "image/avif": ".avif",
  "image/webp": ".webp",
  "image/jpeg": ".jpeg",
  "image/png": ".png",
  "image/svg+xml": ".svg",
};
