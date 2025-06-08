import { ReactNode, useCallback, useMemo, useState } from "react";
import usePersistedState from "./usePersistedState";

type UseMultiStepProps = {
  steps: ReactNode[];
  titles: string[];
  persist?: boolean;
};

const useMultiStep = ({ steps, titles, persist = true }: UseMultiStepProps) => {
  const [stepIndex, setStepIndex] = useState(0);

  const [persistedStepIndex, setPersistedStepIndex] = usePersistedState({
    defaultValue: 0,
    storageKey: `${JSON.stringify(titles)}`,
  });

  const currentStepIndex = useMemo(
    () => (persist ? persistedStepIndex : stepIndex),
    [persist, stepIndex, persistedStepIndex]
  );

  const setCurrentStepIndex = useCallback(
    (index: number | ((i: number) => number)) =>
      persist ? setPersistedStepIndex(index) : setStepIndex(index),
    [persist, setPersistedStepIndex, setStepIndex]
  );

  const next = () => {
    setCurrentStepIndex((i: number) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i: number) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    title: titles[currentStepIndex],
    titles,
    next,
    back,
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStep;
