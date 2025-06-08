import type { RefObject } from "react";
import type { DownloadType, ExportProps } from "./types";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { ExportFormat } from "../../../../types/types";
import styles from "./_styles.module.scss";
import Button from "../../../core/Button";
import { Download } from "lucide-react";

const formats: DownloadType[] = [
  { file: ExportFormat.csv, ext: ".csv" },
  // { file: ExportFormat.pdf, ext: ".pdf" },
  // { file: ExportFormat.json, ext: ".json" },
  // { file: ExportFormat.excel, ext: ".xlsx" },
];

const ExportData = ({
  onExport,
  onSendToEmail = () => {},
  buttonVariant,
  isLoading,
}: ExportProps) => {
  const {
    open: isActive,
    setOpen: setIsActive,
    dropdownRef,
  } = useClickOutside();

  const handleToggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleExportData = async (file: ExportFormat) => {
    await onExport(file);
    setIsActive(false);
  };

  return (
    <div
      ref={dropdownRef as RefObject<HTMLDivElement>}
      className={styles.export}
    >
      <Button
        text={isLoading ? "Exporting..." : "Export"}
        variant={buttonVariant}
        icon={<Download size={20} />}
        iconPosition="left"
        onClick={handleToggleDropdown}
        size="small"
        width={"fit"}
      />
      <div
        className={`${styles.export__content} ${isActive ? styles.export__content__active : ""}`}
      >
        <ul>
          {formats.map((format, index) => (
            <li
              key={index}
              onClick={() => {
                void handleExportData(format.file);
              }}
            >
              <p>
                Download {format.file.toUpperCase()}{" "}
                <span className={styles.ext}>({format.ext})</span>
              </p>
            </li>
          ))}

          {onSendToEmail && (
            <li onClick={onSendToEmail}>
              <p>
                Send to Email <span className={styles.ext}>(.csv)</span>
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExportData;
