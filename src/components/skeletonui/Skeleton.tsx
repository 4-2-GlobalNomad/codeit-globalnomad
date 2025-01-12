import { ReactNode } from 'react';
import * as styles from './Skeleton.css';

interface SkeletonProp {
  className?: string;
  children: ReactNode;
}

const Skeleton = ({ className, children }: SkeletonProp) => {
  return <div className={`${styles.skeleton} ${className}`}>{children}</div>;
};

export default Skeleton;
