import { memo } from 'react';
import Student from './pages/student';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Student/>
    </div>
  );
};

export default memo(App);