import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const usePrint = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const print = useReactToPrint({
    contentRef,
    documentTitle: "Print Invoice",
    pageStyle: `
      @page {
        margin: 0;
      }
      body {
        padding: 20px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
  });

  return { print, contentRef };
};

export default usePrint;
