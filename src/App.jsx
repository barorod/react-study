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

  const handleToggleItem = (id) =>
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const handleRemoveAll = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItem={handleToggleItem}
        onRemoveItem={handleRemoveItem}
        items={items}
        onRemoveAll={handleRemoveAll}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
