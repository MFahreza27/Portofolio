import React, { useState } from "react";
import Masonry from "react-masonry-css";

// Tambahkan nama file sertifikat baru ke array ini, layout akan otomatis menyesuaikan
const certificateImages = [
  "/Sertif1.PNG",
  "/Sertif2.PNG",
  // Contoh: "/sertif2.png", "/sertif3.jpg", dst.
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const CertificatesSection = () => {
  const [zoomImg, setZoomImg] = useState(null);
  const handleClose = () => setZoomImg(null);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Sertifikat</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {certificateImages.map((src, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setZoomImg(src)}
          >
            <img
              src={process.env.PUBLIC_URL + src}
              alt={`Sertifikat ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>
      {/* Modal zoom */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
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
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      <style>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  );
};

export default CertificatesSection; 