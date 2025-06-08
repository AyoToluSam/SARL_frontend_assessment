import { useState } from "react";

type UseFileUploadProps = {
  fileName?: string;
  allowedTypes?: string[];
  allowedSize?: number;
  handleFile?: (file: File) => void;
};

export const useFileUpload = ({
  allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
    "image/svg+xml",
    "application/pdf",
    "application/msword", //doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
    "application/vnd.ms-powerpoint", //ppt
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", //pptx
    "application/vnd.ms-excel", //xls
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //xlsx
    "application/zip",
    "application/vnd.rar",
    "text/csv",
    // You can add more MIME types if what you need is not here.
  ],
  allowedSize = 2, // In Megabytes(MB)
  handleFile,
}: UseFileUploadProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [errMsg, setErrMsg] = useState("");

  const allowedSizeInBytes = allowedSize * 1024 * 1024;

  const handleUpload = (file: File) => {
    if (
      file &&
      allowedTypes.includes(file.type) &&
      file.size <= allowedSizeInBytes
    ) {
      handleFile?.(file);
      setUploadedFile(file);
      setErrMsg("");
      setProgress(100);
    } else if (!allowedTypes.includes(file.type)) {
      setErrMsg("Invalid file type.");
      setUploadedFile(null);
    } else if (file.size > allowedSizeInBytes) {
      setErrMsg(`Maximum file size is ${allowedSize}MB.`);
      setUploadedFile(null);
    }
  };

  const handleBrowseFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const fileSize = file.size;
    let bytesUploaded = 0;

    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        bytesUploaded += event.loaded;
        const percentComplete = (bytesUploaded / fileSize) * 100;
        setProgress(percentComplete);
      }
    };

    reader.onloadend = () => {
      setProgress(100);
    };

    reader.readAsArrayBuffer(file);

    if (file) {
      handleUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  return {
    handleBrowseFiles,
    handleDragOver,
    handleDrop,
    uploadedFile,
    progress,
    setUploadedFile,
    errMsg,
  };
};
