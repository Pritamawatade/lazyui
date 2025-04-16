'use client';

import React, { useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';
type DialogSize = 'small' | 'medium' | 'large' | 'xlarge' | 'full';

interface DialogProps {
  type?: VariantType;
  title?: string;
  description?: string;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  size?: DialogSize;
  showCloseButton?: boolean;
  preventBackdropClose?: boolean;
  children?: ReactNode;
}

const VARIANTS: Record<VariantType, Record<string, string>> = {
  default: {
    bg: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    iconColor: 'text-gray-400',
    primaryButton: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondaryButton: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200',
  },
  info: {
    bg: 'bg-white',
    border: 'border-indigo-200',
    text: 'text-indigo-900',
    iconColor: 'text-indigo-500',
    primaryButton: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondaryButton: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-100',
  },
  success: {
    bg: 'bg-white',
    border: 'border-emerald-200',
    text: 'text-emerald-900',
    iconColor: 'text-emerald-500',
    primaryButton: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    secondaryButton: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-100',
  },
  warning: {
    bg: 'bg-white',
    border: 'border-amber-200',
    text: 'text-amber-900',
    iconColor: 'text-amber-500',
    primaryButton: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondaryButton: 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-100',
  },
  danger: {
    bg: 'bg-white',
    border: 'border-rose-200',
    text: 'text-rose-900',
    iconColor: 'text-rose-500',
    primaryButton: 'bg-rose-600 hover:bg-rose-700 text-white',
    secondaryButton: 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-100',
  },
};

const Dialog: React.FC<DialogProps> = ({
  type = 'default',
  title = 'This is example title',
  description = "This action can't be undone please choose wisly",
  open = false,
  onClose,
  onConfirm,
  confirmText = 'Continue',
  cancelText = 'Cancel',
  size = 'medium',
  showCloseButton = true,
  preventBackdropClose = false,
  children,
}) => {
  const variant = VARIANTS[type] || VARIANTS.default;

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && !preventBackdropClose) {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [open, onClose, preventBackdropClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !preventBackdropClose) {
      onClose?.();
    }
  };

  const sizeClasses: Record<DialogSize, string> = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-lg',
    xlarge: 'max-w-xl',
    full: 'max-w-4xl',
  };

  const selectedSize = sizeClasses[size] || sizeClasses['medium'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`${variant.bg} ${variant.text} ${selectedSize} w-full rounded-xl shadow-xl overflow-hidden border ${variant.border}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between px-6 pt-5 pb-1">
                {title && (
                  <motion.h3
                    className="font-medium text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {title}
                  </motion.h3>
                )}

                {showCloseButton && (
                  <motion.button
                    className={`${variant.iconColor} p-2 rounded-full hover:bg-black/5 active:bg-black/10 transition-all ml-auto`}
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <X size={20} />
                  </motion.button>
                )}
              </div>
            )}

            <div className="px-6 py-4">
              {description && (
                <motion.p
                  className="text-base opacity-90 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {description}
                </motion.p>
              )}

              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {children}
                </motion.div>
              )}
            </div>

            {(onConfirm || onClose) && (
              <motion.div
                className="px-6 py-4 bg-gray-50 flex justify-end gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {onClose && (
                  <motion.button
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${variant.secondaryButton} transition-all`}
                    onClick={onClose}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {cancelText}
                  </motion.button>
                )}

                {onConfirm && (
                  <motion.button
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${variant.primaryButton} transition-all`}
                    onClick={onConfirm}
                    whileHover={{ scale: 1.03, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                    whileTap={{ scale: 0.97, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
                  >
                    {confirmText}
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
