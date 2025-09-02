'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, User } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-white"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function WhatsAppFab() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full right-0 mb-3 w-64 origin-bottom-right rounded-lg bg-card border border-border shadow-xl p-3"
          >
            <div className="p-2">
              <h3 className="font-bold text-card-foreground text-center text-sm font-headline">Need help?</h3>
              <p className="text-muted-foreground text-xs text-center mt-1">Chat with our team directly on WhatsApp.</p>
            </div>
            <ul className="space-y-2 mt-2">
              <li>
                <Link 
                    href="http://wa.me/+923021550385" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary transition-colors"
                >
                    <User className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Chat with Developer</span>
                </Link>
              </li>
              <li>
                <Link 
                    href="http://wa.me/+923355448505" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary transition-colors"
                >
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Chat with Support</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#25D366] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#128C7E] transition-all duration-300 group-hover:scale-110">
        <WhatsAppIcon />
      </div>
    </div>
  );
}
