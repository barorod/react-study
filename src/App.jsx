import Stats from './Stats';
// import './App.css';
import './FarAway.css';
import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((currItems) => [...currItems, item]);
  };

  const handleRemoveItem = (id) =>
    setItems((currItems) => currItems.filter((item) => item.id !== id));

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList onRemoveItem={handleRemoveItem} items={items} />
      <Stats />
    </div>
  );
};

export default App;
