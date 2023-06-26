import { randomIntFromInterval } from '@/utils/manipulation';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  hidden: {
    backgroundColor: '#f78f3f',
    translateY: '0px',
    translateX: '0px',
    scale: 1
  },
  visible: i => ({
    backgroundColor: '#e23636',
    translateY: '100px',
    translateX: (100 - randomIntFromInterval(0, 200 * i)) * .97 + 'px',
    scale: randomIntFromInterval(65, 101) / 100,
    transition: {
      delay: i * .65,
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1.8,
      type: 'spring',
      bounce: .6
    },
  }),
}

const Loading: React.FC = () => {
  
  return (
    <div
      className="w-full h-full flex items-center justify-center gap-4"
    >
      <motion.div
        className='w-24 h-24 rounded-full shadow-xl dark:bg-slate-50 bg-slate-950'
        variants={variants}
        initial='hidden'
        animate="visible"
        custom={1}
      />
      <motion.div
        className='w-24 h-24 rounded-full shadow-xl dark:bg-slate-50 bg-slate-950'
        variants={variants}
        initial='hidden'
        animate="visible"
        custom={2}
      />
      <motion.div
        className='w-24 h-24 rounded-full shadow-xl dark:bg-slate-50 bg-slate-950'
        variants={variants}
        initial='hidden'
        animate="visible"
        custom={3}
      />
    </div>
  );
}

export default Loading;