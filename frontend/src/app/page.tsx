import MainContainer from '@/components/home/main-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

const Home = () => {
  return <MainContainer />;
};

export default Home;
