import { type FC } from 'react';
import './App.css';
import ProfileWriter from './components/Profile';
// import RegistrationForm from './components/RegistrationFormV2';
// import Timer from './components/Timer.memo';
// import Timer from './components/Timer';

const App: FC = () => {
  console.log('test');
  return (
    <>
      <ProfileWriter count={200} />
    </>
  );
};

export default App;
