import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { BlockElementType, SubDataClassType } from '@/types/wall';
import { Icon } from '@/components/common';
import nextIcon from '@/assets/icons/next.svg';
import previousIcon from '@/assets/icons/previous.svg';

export default function PdfPreview({
  targetFileBlock,
}: {
  targetFileBlock: BlockElementType;
}) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void =>
    setNumPages(numPages);

  const handleClickPrevious = () => {
    if (pageNumber === 1) {
      return;
    } else {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleClickNext = () => {
    if (pageNumber === numPages) {
      return;
    } else {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleDownload = () => {
    // Step 2: Convert Base64 to Blob
    const byteCharacters = atob(
      ((targetFileBlock.subData as SubDataClassType).file as string).split(
        ',',
      )[1],
    );
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Step 3: Create Blob URL
    const blobUrl = URL.createObjectURL(blob);

    // Step 4: Create an invisible anchor element
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download =
      (targetFileBlock.subData as SubDataClassType).fileName || 'file.txt'; // You can set a default file name

    // Step 5: Trigger a click event on the anchor element
    anchor.click();

    // Step 6: Clean up
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div className="select-none">
      <section className="flex justify-between py-2 px-2">
        <p className="dm-16 text-blue hover" onClick={handleDownload}>
          {(targetFileBlock.subData as SubDataClassType).fileName}
        </p>
        <p className="">
          Page {pageNumber} of {numPages}
        </p>
      </section>
      <Document
        className="overflow-hidden w-full mx-auto relative"
        file={(targetFileBlock.subData as SubDataClassType).file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={810} />
        <Icon
          src={previousIcon}
          onClick={handleClickPrevious}
          className={`z-20 absolute left-3 top-[calc(50%-10px)] hover ${
            pageNumber === 1 && 'hidden'
          }`}
        />
        <Icon
          src={nextIcon}
          onClick={handleClickNext}
          className={`z-20 absolute right-3 top-[calc(50%-10px)] hover ${
            pageNumber === numPages && 'hidden'
          }`}
        />
      </Document>
    </div>
  );
}
