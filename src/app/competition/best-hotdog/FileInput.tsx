// src/components/FileInput.tsx
import imageCompression from "browser-image-compression";
import React, { useRef, useState } from "react";

interface ImageInputProps {
  onImageReady: (file: File | null) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageReady }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const compressImage = async (file: File): Promise<File> => {
    if (file.size <= 1024 * 1024) return file;
    return await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const compressed = await compressImage(file);
    const url = URL.createObjectURL(compressed);
    setPreview(url);
    setFileName(compressed.name);
    onImageReady(compressed);
  };

  const clearImage = () => {
    setPreview(null);
    setFileName("");
    if (inputRef.current) inputRef.current.value = "";
    onImageReady(null);
  };

  return (
    <div className="w-full mt-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full bg-black bg-opacity-50 border-2 border-green-400 text-green-200 font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 hover:border-green-200 transition"
      >
        Wybierz zdjęcie swojej parówki 🌭
      </button>

      {preview && (
        <div className="mt-4 border-2 border-green-400 bg-black bg-opacity-50 rounded-lg p-2">
          <img src={preview} alt="preview" className="w-full rounded-lg" />
          <button
            type="button"
            onClick={clearImage}
            className="mt-2 w-full bg-red-500 border border-black py-1 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Wyczyść obrazek
          </button>
        </div>
      )}

      {fileName && (
        <p className="mt-2 text-center text-sm truncate text-green-200">{fileName}</p>
      )}
    </div>
  );
};

export default ImageInput;
