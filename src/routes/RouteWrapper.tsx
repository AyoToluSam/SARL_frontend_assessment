import ErrorBoundary from "@/components/global/ErrorBoundary";
import SuspenseElement from "@/components/global/SuspenseElement";
import { ReactNode, Suspense } from "react";
import { useLocation } from "react-router";

const RouteWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <ErrorBoundary resetKeys={[location.pathname]}>
      <Suspense fallback={<SuspenseElement />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default RouteWrapper;
