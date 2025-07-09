'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { toast, ToastOptions, ToastContent, Id } from 'react-toastify';

// Define the context type
type ToastContextType = {
  showToast: (content: ToastContent, options?: ToastOptions) => Id;
  showSuccess: (content: ToastContent, options?: ToastOptions) => Id;
  showError: (content: ToastContent, options?: ToastOptions) => Id;
  showInfo: (content: ToastContent, options?: ToastOptions) => Id;
  showWarning: (content: ToastContent, options?: ToastOptions) => Id;
  showLoading: (content: ToastContent, options?: ToastOptions) => Id;
  updateToast: (toastId: Id, content: ToastContent, options?: ToastOptions) => void;
  dismissToast: (toastId: Id) => void;
};

// Create the context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Create a provider component
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Basic toast function
  const showToast = (content: ToastContent, options?: ToastOptions) => {
    return toast(content, options);
  };

  // Success toast
  const showSuccess = (content: ToastContent, options?: ToastOptions) => {
    return toast.success(content, options);
  };

  // Error toast
  const showError = (content: ToastContent, options?: ToastOptions) => {
    return toast.error(content, options);
  };

  // Info toast
  const showInfo = (content: ToastContent, options?: ToastOptions) => {
    return toast.info(content, options);
  };

  // Warning toast
  const showWarning = (content: ToastContent, options?: ToastOptions) => {
    return toast.warning(content, options);
  };

  // Loading toast
  const showLoading = (content: ToastContent, options?: ToastOptions) => {
    return toast.loading(content, {
      ...options,
      autoClose: false,
    });
  };

  // Update an existing toast
  const updateToast = (toastId: Id, content: ToastContent, options?: ToastOptions) => {
    toast.update(toastId, {
      render: content,
      ...options,
    });
  };

  // Dismiss a toast
  const dismissToast = (toastId: Id) => {
    toast.dismiss(toastId);
  };

  // Context value
  const value = {
    showToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    updateToast,
    dismissToast,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

// Custom hook to use the toast context
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
