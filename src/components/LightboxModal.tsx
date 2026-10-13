import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#181818] text-white hover:bg-[#FF3030] transition-colors border border-white/20"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal content container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-[#333333] bg-[#0E0E0E] shadow-2xl">
          <img
            src={imageSrc}
            alt={caption}
            className="max-h-[78vh] w-auto max-w-full object-contain mx-auto"
          />

          {caption && (
            <div className="p-4 bg-[#141414] border-t border-[#262626] text-center">
              <p className="text-sm font-semibold text-white tracking-wide">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
