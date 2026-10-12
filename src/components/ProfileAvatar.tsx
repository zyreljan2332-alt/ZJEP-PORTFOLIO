import React, { useRef, useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Camera, Upload, User, CheckCircle2 } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showUploadOverlay?: boolean;
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'md', 
  showUploadOverlay = true,
  className = ''
}) => {
  const { photoUrl, handleFileUpload } = useProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgError, setImgError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgError(false);
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImgError(false);
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-full',
    md: 'w-14 h-14 rounded-xl',
    lg: 'w-24 h-24 rounded-2xl',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 rounded-2xl'
  }[size];

  const hasValidPhoto = photoUrl && !imgError;

  return (
    <div 
      className={`relative group inline-block shrink-0 ${className}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={onFileChange} 
        accept="image/*" 
        className="hidden" 
        aria-label="Upload Zyrel Jan Pizarro headshot photo"
      />

      <div 
        className={`${sizeClasses} overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl transition-all relative ${
          isDragging ? 'ring-2 ring-amber-400 scale-105' : 'group-hover:border-amber-400/60'
        }`}
      >
        {hasValidPhoto ? (
          <img
            src={photoUrl}
            alt="Zyrel Jan Pizarro - Amazon Seller Central Specialist"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* High-Fidelity Professional Fallback Avatar */
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center p-2 text-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-1">
              <User className="w-5 h-5" />
            </div>
            {size === 'xl' && (
              <span className="text-[11px] font-medium text-slate-400">
                Zyrel J. Pizarro
              </span>
            )}
          </div>
        )}

        {/* Hover Upload Overlay */}
        {showUploadOverlay && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer backdrop-blur-[2px]"
            title="Click or drag photo to update headshot"
          >
            <Camera className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-[10px] font-medium tracking-tight px-1">
              {hasValidPhoto ? 'Change Photo' : 'Upload Photo'}
            </span>
          </button>
        )}
      </div>

      {/* Verified Specialist Badge on bottom-right of avatar */}
      {size !== 'sm' && (
        <div 
          className="absolute -bottom-1 -right-1 bg-slate-950 rounded-full p-0.5 shadow-md border border-slate-800"
          title="Verified Amazon Specialist"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950">
            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
          </div>
        </div>
      )}
    </div>
  );
};
