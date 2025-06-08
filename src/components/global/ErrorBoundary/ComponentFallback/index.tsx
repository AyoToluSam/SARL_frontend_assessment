import Button from "@/components/core/Button";
import styles from "./_styles.module.scss";

type ComponentFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ComponentFallback = ({
  error,
  resetErrorBoundary,
}: ComponentFallbackProps) => {
  return (
    <div className={styles.component_fallback}>
      <div className={styles.message}>
        <h1>
          Oops! <span>💔</span> <br /> Something went wrong.
        </h1>
        <h4>
          {navigator.onLine
            ? "But it's most likely not your fault. Please try again or contact support."
            : "It seems to be your internet connection."}
        </h4>
        <div className={styles.error_message}>
          <p>{error.message}</p>
        </div>
        <div className={styles.buttons}>
          <Button
            text="Try again"
            variant="main"
            width={"full"}
            onClick={resetErrorBoundary}
          />
          <Button text="Contact Support" variant="alt" width={"full"} />
        </div>
      </div>
    </div>
  );
};

export default ComponentFallback;
