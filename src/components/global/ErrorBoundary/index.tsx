import ComponentFallback from "@/components/global/ErrorBoundary/ComponentFallback";
import { ComponentType, ErrorInfo, ReactNode } from "react";
import {
  ErrorBoundary as ErrorHandler,
  FallbackProps,
} from "react-error-boundary";

type ErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
  resetKeys?: string[];
  fallback?: ComponentType<FallbackProps>;
};

const ErrorBoundary = ({
  children,
  onReset,
  resetKeys,
  fallback,
}: ErrorBoundaryProps) => {
  const handleError = (error: Error, info: ErrorInfo) => {
    console.log(error, info);
  };

  return (
    <ErrorHandler
      FallbackComponent={
        fallback ?? (ComponentFallback as ComponentType<FallbackProps>)
      }
      onError={handleError}
      onReset={onReset}
      resetKeys={resetKeys || []}
    >
      {children}
    </ErrorHandler>
  );
};

export default ErrorBoundary;
