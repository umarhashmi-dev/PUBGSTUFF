
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

// https://github.com/Kastner-Jakob/magic-ui/blob/main/registry/components/magicui/animated-list.tsx
export const AnimatedList = React.memo(
  ({
    className,
    children,
    delay = 1000,
    maxItems = 10,
  }: {
    className?: string;
    children: ReactNode;
    delay?: number;
    maxItems?: number;
  }) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow =
      childrenArray.length > maxItems
        ? Array.from({ length: maxItems }, (_, i) => {
            const itemIndex = (index + i) % childrenArray.length;
            return childrenArray[itemIndex];
          })
        : childrenArray;

    return (
      <div
        className={cn(
          "relative flex h-full min-h-[500px] w-full flex-col overflow-hidden",
          className,
        )}
      >
        <AnimatePresence>
          {itemsToShow.map((item, i) => (
            <AnimatedListItem key={i} i={i}>
              {item as ReactElement}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({
  children,
  i,
}: {
  children: ReactElement;
  i: number;
}) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
        delay: i * 0.1,
      }}
      className="mx-auto w-full"
    >
      {React.cloneElement(children, {
        className: cn(
          children.props.className,
          "child mb-2 flex h-fit w-full shrink-0",
        ),
      })}
    </motion.div>
  );
}
