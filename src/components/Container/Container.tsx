import { motion } from "framer-motion";

interface MotionContainerProps {
  children: React.ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
  classes?: string;
}

const MotionWrapper: React.FC<MotionContainerProps> = ({
  children,
  classes,
  elementType: Component = "div",
}) => {
  const MotionComponent = motion[Component as keyof typeof motion];

  return (
    <MotionComponent
      className={classes}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;
