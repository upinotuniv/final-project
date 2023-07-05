import React, { useState, useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Mengatur interval waktu 3000 ms (3 detik) antara perpindahan gambar

    return () => {
      clearInterval(interval); // Membersihkan interval ketika komponen Carousel tidak lagi dirender
    };
  }, []); // Menggunakan array kosong sebagai argumen kedua untuk useEffect agar hanya dijalankan sekali saat komponen dipasang

  return (
    <div className='relative'>
      <img
        src={images[currentImage]}
        alt='carousel-image'
        className='mx-auto '
      />
    </div>
  );
}
