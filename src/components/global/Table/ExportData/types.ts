import { ExportFormat } from "../../../../types/types";

export interface ExportProps {
  onExport: (format: ExportFormat) => void | Promise<void>;
  onSendToEmail?: () => void | Promise<void>;
  buttonVariant?: "main" | "alt" | "grey";
  isLoading?: boolean;
}

export type DownloadType = { file: ExportFormat; ext: string };
