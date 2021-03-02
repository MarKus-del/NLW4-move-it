import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';
import styles from '../../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="/user.png" alt=""/>
      <div>
        <strong>USER</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}