// src/utils/processImage.ts
export async function processImage(file: File): Promise<File> {
  if (file.size <= 1024 * 1024) return file;

  const imageBitmap = await createImageBitmap(file);
  const scale = Math.min(MAX_WIDTH / imageBitmap.width, 1); // Don't upscale

  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width * scale;
  canvas.height = imageBitmap.height * scale;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');

  ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);

  return new Promise<File>((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const newFile = new File([blob], file.name, { type: file.type });
          resolve(newFile);
        } else {
          resolve(file); // fallback
        }
      },
      file.type,
      0.85, // Quality
    );
  });
}

const MAX_WIDTH = 1024;
