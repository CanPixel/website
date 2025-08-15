"use client";

import { useState, useEffect } from 'react';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import { pdfjs } from 'react-pdf'; // Import pdfjs here
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

interface PDFViewerProps {
  pdfUrl: string;
}


export function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  console.log('PDFViewer component rendered. Loading:', loading, 'Error:', error, 'pdfUrl:', pdfUrl);

  // Dynamically import the react-pdf components
  const Document = dynamic(() => {
    console.log('Attempting to dynamically import Document...');
    return import('react-pdf').then((mod) => {
      console.log('Document module loaded:', mod);
      return mod.Document;
    });
  }, {
    ssr: false, // This is the key: disable server-side rendering for this component
    loading: () => {
      console.log('Rendering Document loading state...');
      return <p>Loading PDF...</p>;
    },
  });

  const Page = dynamic(() => {
    console.log('Attempting to dynamically import Page...');
    return import('react-pdf').then((mod) => {
      console.log('Page module loaded:', mod);
      return mod.Page;
    });
  }, { ssr: false });

  useEffect(() => {
    console.log('useEffect for setting worker source is running.');
    import('react-pdf').then((mod) => {
      if (typeof window !== 'undefined' && mod.pdfjs) {
        console.log('Setting worker source...');
        mod.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.pdfjs.version}/pdf.worker.js`;
 console.log('Worker source set:', mod.pdfjs.GlobalWorkerOptions.workerSrc);
      }
    }).catch(err => {
      console.error('Failed to dynamically import react-pdf in useEffect:', err);
    });
  }, []); // Empty dependency array to run only once on mount


  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    console.log('Document loaded successfully. Number of pages:', numPages);
    setError(null);
  };

  const onDocumentLoadError = (err: any) => {
    console.error('Failed to load PDF:', err);
 console.log('Failed to load PDF.');
    setError('Failed to load PDF.');
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages || 1));
  };

  // Render null or a loading indicator during SSR or initial loading
  if (loading) {
    console.log('Rendering loading state...');
    return <div className="pdf-viewer-container flex flex-col items-center p-4"><p>Loading PDF...</p></div>;
  }

  if (error) {
    return <div className="pdf-viewer-container flex flex-col items-center p-4 text-red-500"><p>Error: {error}</p></div>;
  }

  return (
    <div className="pdf-viewer-container flex flex-col items-center"> {/* Add flex and centering */}
      <div className="pdf-document-wrapper max-w-full overflow-auto"> {/* Allow horizontal scroll for large PDFs */}
 {/* Conditionally render Document and Page only when they are loaded */}
 {typeof Document === 'function' && typeof Page === 'function' ? (
 <Document
          file={"/" + pdfUrl}
 onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page
 key={pageNumber} // It's good practice to include a key when rendering lists or elements that change
            pageNumber={pageNumber}
 width={typeof window !== 'undefined' ? Math.min(800, window.innerWidth * 0.9) : undefined} // Example responsive width, set to undefined on server
            renderAnnotationLayer={true} // Render annotations
            renderTextLayer={true} // Render text layer for selection/copying
          />
        </Document>
 ) : <></>}
      </div>
      {/* Fallback for when dynamic components are loading */}
      {!(typeof Document === 'function' && typeof Page === 'function') && <p>Loading PDF components...</p>}

      {numPages && (
        <div className="pdf-controls mt-4 flex gap-2">
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