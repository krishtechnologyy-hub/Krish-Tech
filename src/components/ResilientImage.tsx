import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1931] via-[#102547] to-[#071226] text-slate-200 p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <ShieldCheck className="w-10 h-10 text-blue-400 mb-3 shrink-0" aria-hidden="true" />
        <span className="text-sm font-medium text-white/90">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
