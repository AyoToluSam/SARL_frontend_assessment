import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";
import { useEffect, ReactNode, useState } from "react";
import { AllowedMimeType, FileUploadProps } from "../FormElement/types";
import { useFileUpload } from "@/hooks/useFileUpload";
import styles from "./_styles.module.scss";
import Uploader from "@/components/core/Form/FileUpload/Uploader";

export type CustomComponentProps = {
  fieldName: string;
  fieldLabel?: string;
  allowedSize: number;
  allowedFileTypes?: [AllowedMimeType, ...AllowedMimeType[]];
  uploadedFile: File | null;
  imageSrc: string | undefined;
  handleBrowseFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  removeImage: () => void;
  defaultFile?: {
    type: "pdf" | "doc" | "image" | "csv";
    name: string;
  } | null;
  errMsg?: string;
  isDisabled?: boolean;
  withoutLabel?: boolean;
  required?: boolean;
};

type FileUploadInputProps = FileUploadProps & {
  register: UseFormRegister<FieldValues>;
  customComponent?: (props: CustomComponentProps) => ReactNode;
};

const FileUpload = ({
  fieldName,
  fieldLabel,
  register,
  required,
  customComponent,
  allowedSize = 2,
  allowedFileTypes = ["image/jpeg", "image/png"],
  isDisabled,
  defaultValue,
  withoutLabel,
}: FileUploadInputProps) => {
  const [defaultFile, setDefaultFile] = useState<typeof defaultValue | null>(
    defaultValue
  );

  const { setValue, setError, clearErrors } = useFormContext();

  const {
    handleBrowseFiles,
    handleDragOver,
    handleDrop,
    uploadedFile,
    setUploadedFile,
    errMsg,
  } = useFileUpload({
    fileName: fieldName,
    allowedSize,
    allowedTypes: allowedFileTypes,
    handleFile: (file) => {
      setValue(fieldName, file);
    },
  });

  // useEffect(() => {
  //   if (uploadedFile instanceof File) {
  //     setValue(fieldName, uploadedFile);
  //   } else {
  //     setUploadedFile(null);
  //     setValue(fieldName, null);
  //   }
  // }, [fieldName, setUploadedFile, setValue, uploadedFile]);

  useEffect(() => {
    if (errMsg) {
      setError(fieldName, {
        type: "manual",
        message: errMsg,
      });
    } else {
      clearErrors(fieldName);
    }
  }, [errMsg, fieldName, setError, clearErrors]);

  const removeImage = () => {
    setDefaultFile(null);
    setUploadedFile(null);
    setValue(fieldName, null);
  };

  const customComponentProps: CustomComponentProps = {
    fieldName,
    fieldLabel,
    allowedSize,
    allowedFileTypes,
    uploadedFile,
    imageSrc:
      uploadedFile instanceof File
        ? URL.createObjectURL(uploadedFile)
        : undefined,
    handleBrowseFiles,
    handleDragOver,
    handleDrop,
    removeImage,
    defaultFile,
    errMsg,
    isDisabled,
    withoutLabel,
  };

  return (
    <div className={styles.fileUpload}>
      <input
        id={fieldName}
        type="file"
        accept={allowedFileTypes?.join(",")}
        {...register(fieldName, {
          required: required ? "This field is required." : false,
        })}
        onChange={isDisabled ? undefined : handleBrowseFiles}
        style={{ display: "none" }}
      />
      {customComponent ? (
        <div className={styles.custom_component}>
          {customComponent(customComponentProps)}
        </div>
      ) : (
        <Uploader {...customComponentProps} />
      )}
    </div>
  );
};

export default FileUpload;
