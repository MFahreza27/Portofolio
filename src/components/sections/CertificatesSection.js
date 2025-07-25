import React, { useEffect, useRef, useState } from "react";

const certificateImages = [
  "/Sertif1.PNG",
  "/Sertif2.PNG",
  // Tambahkan gambar lain di sini
];

const CertificatesSection = () => {
  const gridRef = useRef(null);
  const [zoomImg, setZoomImg] = useState(null);

  useEffect(() => {
    if (window.Masonry && gridRef.current) {
      // eslint-disable-next-line no-undef
      new window.Masonry(gridRef.current, {
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-sizer",
        percentPosition: true,
        gutter: 16,
      });
    }
  }, [certificateImages.length]);

  const handleClose = () => setZoomImg(null);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Sertifikat</h2>
      <div
        ref={gridRef}
        className="masonry-grid"
        style={{ display: "flex", flexDirection: "row-reverse", marginRight: -16 }}
      >
        <div
          className="masonry-sizer"
          style={{
            width: "33.333%",
            height: 0,
            margin: 0,
            padding: 0,
            border: "none",
            background: "transparent",
            pointerEvents: "none"
          }}
        ></div>
        {certificateImages.map((src, idx) => (
          <div
            key={idx}
            className="masonry-item bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 overflow-hidden cursor-pointer transition-transform hover:scale-105"
            style={{ marginRight: 16, width: "33.333%" }}
            onClick={() => setZoomImg(src)}
          >
            <img
              src={process.env.PUBLIC_URL + src}
              alt={`Sertifikat ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      {/* Modal zoom */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-8"
          onClick={handleClose}
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center" style={{padding: '2vw'}} onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full shadow p-2 hover:bg-gray-200 focus:outline-none z-10"
              onClick={handleClose}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={process.env.PUBLIC_URL + zoomImg}
              alt="Zoom Sertifikat"
              className="max-w-[90vw] max-h-[70vh] sm:max-w-[70vw] sm:max-h-[80vh] rounded-lg shadow-lg border-4 border-white dark:border-gray-800"
              style={{objectFit: 'contain', background: 'white'}}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection; 