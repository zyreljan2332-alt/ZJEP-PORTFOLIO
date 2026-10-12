import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfileContextType {
  photoUrl: string | null;
  setPhotoUrl: (url: string) => void;
  handleFileUpload: (file: File) => void;
  removePhoto: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const STORAGE_KEY = 'zyrel_jan_pizarro_photo_url';

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoState] = useState<string | null>(() => {
    // Check localStorage first
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // Ignore localStorage errors
    }
    // Default fallback to public profile image if present
    return '/profile.jpg';
  });

  const setPhotoUrl = (url: string) => {
    setPhotoState(url);
    try {
      localStorage.setItem(STORAGE_KEY, url);
    } catch {
      // Storage might be exceeded if high-res, ignore gracefully
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <ProfileContext.Provider value={{ photoUrl, setPhotoUrl, handleFileUpload, removePhoto }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
