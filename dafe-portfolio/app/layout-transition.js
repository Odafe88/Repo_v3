"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function LayoutTransition({
  children,
  className,
  style,
  initial,
  animate,
  exit,
}) {
  const path = usePathname();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }

    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]
  )

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={className}
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}

        variants={{
          initialState: {
            opacity: 0.8,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {

          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
