import { CircularProgress } from '@mui/material';
import * as styles from './loading.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress size={'10vh'} sx={{ color: '#0B3B2D' }} />
    </div>
  );
}
