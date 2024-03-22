import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Progress } from '../components';

function MyApp({ Component, pageProps }) {
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
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        className="base-page-size"

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
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence >
  )
}

export default MyApp
