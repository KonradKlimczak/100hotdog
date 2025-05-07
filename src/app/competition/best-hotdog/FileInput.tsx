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
    <div className="max-w-sm mx-auto p-4 bg-yellow-100 border-2 border-black font-mono text-black">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current?.click()}
        className="w-full bg-green-300 border border-black px-3 py-2 text-lg hover:bg-green-400 transition"
      >
        SELECT FILE 🌭
      </button>

      {preview && (
        <div className="mt-4 border-2 border-black bg-white p-1" style={{ imageRendering: 'pixelated' }}>
          <img src={preview} alt="preview" className="w-full" />
          <button
            onClick={clearImage}
            className="mt-2 w-full bg-red-400 border border-black px-2 py-1 text-sm hover:bg-red-500 transition"
          >
            CLEAR IMAGE
          </button>
        </div>
      )}

      {fileName && (
        <p className="mt-2 text-sm truncate text-center">{fileName}</p>
      )}
    </div>
  );
};

export default ImageInput;
