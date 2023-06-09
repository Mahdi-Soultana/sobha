import { motion } from 'framer-motion';
import { useAdrak } from '../state/store';
function Text() {
  const { getDikr } = useAdrak();
  let dikr = getDikr();

  return (
    dikr && (
      <motion.p layout className="p-1 text-2xl text-white mt-10 text-center">
        {dikr.text}
      </motion.p>
    )
  );
}

export default Text;
