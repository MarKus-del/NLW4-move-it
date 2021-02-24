import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number; 
  currentExperience: number;
  challengesCompleted: number; 
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: ()=> void;
  startNewChallenge: ()=> void;
  resetChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}


export const ChallengesContexts = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randowChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randowChallengeIndex];

    setActiveChallenge(challenge);  
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContexts.Provider
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContexts.Provider>
  );
}