export default function customImageLoader({ src, width, quality }: { src: string; width?: number; quality?: number }) {
  // GitHub Pages'de çalışırken tam yolu kullan
  if (src.startsWith('/')) {
    return src;
  }
  // Diğer durumlarda görüntüyü olduğu gibi döndür
  return src;
} 