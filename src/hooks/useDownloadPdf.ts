import { useCallback } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const useDownloadPDF = (
  ref: React.RefObject<HTMLDivElement>,
  filename = "document.pdf"
) => {
  const downloadPDF = useCallback(() => {
    if (!ref.current) return;

    const input = ref.current;

    html2canvas(input, { scale: 2, useCORS: true, allowTaint: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 0.8);
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          pdfWidth,
          pdfHeight,
          undefined,
          "FAST"
        );
        pdf.save(filename);
      })
      .catch((error) => {
        console.error("Failed to generate PDF:", error);
        toast.error("Failed to generate PDF. Please try again.");
      });
  }, [ref, filename]);

  return { downloadPDF };
};

export default useDownloadPDF;
