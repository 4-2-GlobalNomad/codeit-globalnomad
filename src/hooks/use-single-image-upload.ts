import { ChangeEvent, useState } from 'react';

const useSingleImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const encodeFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
      }
    };
  };

  const handleSingleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImageFile(selectedFile);
      encodeFileToBase64(selectedFile);
    }
  };

  return { imageSrc, setImageSrc, imageFile, handleSingleImagePreview };
};

export default useSingleImageUpload;
