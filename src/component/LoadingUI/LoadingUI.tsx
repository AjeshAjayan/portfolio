import { Html } from '@react-three/drei';
import styles from './LoadingUI.module.css';

export const LoadingUI = () => {
  return (
    <Html position={[-2, 2, 0]}>
      <div className={styles.pyramid}>
        <div className={styles.glow}></div>
        <div>
          <span style={{ "--i": 0 } as any}></span>
          <span style={{ "--i": 1 } as any}></span>
          <span style={{ "--i": 2 } as any}></span>
          <span style={{ "--i": 3 } as any}></span>
        </div>
      </div>
    </Html>
  )
}
