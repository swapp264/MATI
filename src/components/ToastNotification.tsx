import React from 'react';

interface ToastNotificationProps {
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-50 animate-bounce duration-300 p-4 rounded-lg bg-[#32302e] text-[#f6efec] shadow-2xl flex items-center gap-3 border border-[#ffe088]/30 max-w-sm">
      <span className="material-symbols-outlined text-[#ffe088] text-xl">check_circle</span>
      <span className="text-xs sm:text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-[#dec0b7] hover:text-white p-1"
        aria-label="Close notification"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
