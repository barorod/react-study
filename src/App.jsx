import Stats from './Stats';
// import './App.css';
import './FarAway.css';
import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';

const App = () => {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
