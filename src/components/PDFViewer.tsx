"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from '@/components/ui/button';

// Configure PDF.js worker source
// **Important:** For production, you should self-host pdf.worker.js
// You can find it in node_modules/pdfjs-dist/build/pdf.worker.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  pdfUrl: string;
}

export function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (err: any) => {
    console.error('Failed to load PDF:', err);
    setError('Failed to load PDF.');
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages || 1));
  };

  if (loading) {
    return <div>Loading PDF...</div>; // Or a spinner component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pdf-viewer-container flex flex-col items-center"> {/* Add flex and centering */}
      <div className="pdf-document-wrapper max-w-full overflow-auto"> {/* Allow horizontal scroll for large PDFs */}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={true} // Render annotations
            renderTextLayer={true} // Render text layer for selection/copying
            width={Math.min(800, window.innerWidth * 0.9)} // Example responsive width
            // You can adjust the width based on your layout or a ref
          />
        </Document>
      </div>

      {numPages && (
        <div className="pdf-controls mt-4 flex gap-2"> {/* Add margin top and gap */}
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            Previous Page
          </Button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <Button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
            Next Page
          </Button>
        </div>
      )}
    </div>
  );
}
