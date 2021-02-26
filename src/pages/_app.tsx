import '../styles/global.css';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChalengesContext';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
