import { FormEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Button } from '../Button';

export const FileInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const handleDelete = useCallback(() => {
    setFile(null);
    setPreviewUrl('');
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log(formData);
      // Handle successful response
    } catch (error) {
      console.error('Error uploading file', error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        {!previewUrl && (
          <div
            {...getRootProps({
              className: 'dropzone bg-gray-200 p-10 rounded-lg border-2 border-dashed border-gray-400 cursor-pointer',
            })}
          >
            <input {...getInputProps()} />
            <p className="text-gray-700">Drag &apos;n&apos; drop some files here, or click to select files</p>
          </div>
        )}
        {previewUrl && (
          <div>
            <div className="preview w-40 h-40 bg-gray-100 p-1">
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <Button variant="ghost" onClick={handleDelete}>
              Usuń
            </Button>
          </div>
        )}
        <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
