
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, AlertTriangle, MessageSquare, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M12.06 0C5.4 0 0 5.4 0 12.06c0 3.48 1.44 6.6 3.78 8.82L2.04 24l3.3-1.74c2.16 1.26 4.62 1.98 7.2 1.98h.06c6.66 0 12.06-5.4 12.06-12.06S18.72 0 12.06 0zm0 2.16c5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9h-.06c-2.34 0-4.56-.84-6.3-2.34l-.42-.36-4.62 2.46 2.52-4.5.3-.54c-1.68-1.8-2.64-4.14-2.64-6.66C2.16 6.6 6.6 2.16 12.06 2.16zm0 1.56c-4.5 0-8.16 3.66-8.16 8.16 0 2.22.9 4.26 2.4 5.76l.3.3.18.36.96 1.8-1.56 2.76 2.82-1.5.36.18c1.44.72 3.06 1.14 4.8 1.14h.06c4.5 0 8.16-3.66 8.16-8.16s-3.66-8.16-8.16-8.16zm4.38 10.86c-.24-.12-1.44-.72-1.68-.84-.24-.06-.42-.06-.6.06s-.66.84-.84 1.02c-.12.12-.3.18-.54.06s-1.02-.36-1.92-1.2c-.72-.66-1.2-1.44-1.32-1.68s0-.36.06-.48.24-.24.36-.36c.12-.12.18-.24.24-.42s.06-.3-.06-.42c-.06-.12-.6-1.44-.84-1.98-.18-.54-.42-.42-.6-.42h-.54c-.24 0-.6.06-.9.3s-1.2 1.14-1.2 2.76 1.2 3.18 1.38 3.42c.12.18 2.46 3.78 6 5.28s3.06 1.2 4.08 1.14c1.02-.06 3.18-.36 3.6-1.62.42-1.26.42-2.34.3-2.52s-.42-.24-.66-.36z" />
    </svg>
);

export default function NotificationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasBeenDismissed = sessionStorage.getItem('notificationDismissed');
    if (!hasBeenDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // 1-second delay before showing
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('notificationDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg"
        >
          <div className="container mx-auto max-w-5xl p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Logo />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-600" />
                            <a href="tel:+923355448505" className="text-base font-semibold text-gray-800 hover:text-primary transition-colors">+92 335 5448505</a>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <Phone className="h-5 w-5 text-gray-600" />
                            <a href="tel:+923021550385" className="text-base font-semibold text-gray-800 hover:text-primary transition-colors">+92 302 1550385</a>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <AlertTriangle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-800">
                                These are our only official numbers. If you communicate, make payments, or purchase products through any other person or number, we will not be responsible in any way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white hover-shimmer-button">
                    <Link href="http://wa.me/+923021550385" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        Developer WhatsApp
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white hover-shimmer-button">
                     <Link href="http://wa.me/+923355448505" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        Support Team
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#5865F2] hover:bg-[#4752C4] text-white hover-shimmer-button">
                    <Link href="https://discord.com/invite/PwbEZ7wa3v" target="_blank" rel="noopener noreferrer">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6667 1.2486a18.657 18.657 0 00-5.485 0 18.18 18.18 0 00-.6667-1.2486.077.077 0 00-.0785-.037 19.719 19.719 0 00-4.8851 1.5152.0699.0699 0 00-.0321.027c-1.8931 3.27-2.92 7.04-3.1385 10.9415.0021.0561.0241.1095.0649.1432a21.2323 21.2323 0 005.1516 2.4439.0751.0751 0 00.081-.0231c.4146-.331.7853-.6992 1.12-1.0964a.0741.0741 0 00-.022-0.1171 16.911 16.911 0 01-1.378-1.539.0729.0729 0 01.004-.1011c.022-.015.045-.028.067-.04A12.5441 12.5441 0 008.232 12.01c0-1.42.39-2.77 1.05-3.96a.0729.0729 0 01.078-.036c.142.046.282.093.422.14a.0741.0741 0 01.042.08c-.24.58-.42 1.2-.54 1.86 0 .64.04 1.28.12 1.9a.0709.0709 0 00.07.06c.2199-.0199.4399-.04.6598-.06a.0741.0741 0 01.082.07c-.02.48-.06.96-.12 1.44a.0729.0729 0 00.06.08c.18.01.36.02.5399.02a12.932 12.932 0 001.3-.02.0729.0729 0 00.06-.08c-.06-.48-.0999-.96-.1199-1.44a.0741.0741 0 01.082-.07c.2199.02.4399.04.6598.06a.0709.0709 0 00.07-.06c.08-.62.12-1.26.12-1.9 0-.66-.18-1.28-.54-1.86a.0741.0741 0 01.042-.08c.14-.047.28-.094.422-.14a.0729.0729 0 01.078.036c.66 1.19 1.05 2.54 1.05 3.96a12.5441 12.5441 0 00-2.2276 4.4079.0729.0729 0 01.004.1011c.022.012.045.024.067.038a16.911 16.911 0 01-1.378 1.539.0741.0741 0 00-.022.1171c.3352.3971.7059.7654 1.12 1.0964a.0751.0751 0 00.081.0231 21.2323 21.2323 0 005.1516-2.4439.0629.0629 0 00.0649-.1432c-.2206-3.9-.96-7.66-3.1385-10.9415a.0678.0678 0 00-.032-.027z" /></svg>
                      Join Discord
                    </Link>
                  </Button>
                </div>

              </div>
              <button
                onClick={handleClose}
                className="p-2 -mt-2 -mr-2 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="Close notification"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
