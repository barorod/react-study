import { useState } from 'react';
import List from '../List';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Sunscreen', quantity: 3, packed: false },
  { id: 4, description: 'Water bottle', quantity: 1, packed: true },
  { id: 5, description: 'Snacks', quantity: 10, packed: false },
  { id: 6, description: 'Hat', quantity: 1, packed: false },
  { id: 7, description: 'Map', quantity: 1, packed: true },
  { id: 8, description: 'Camera', quantity: 1, packed: false },
  { id: 9, description: 'Charger', quantity: 1, packed: false },
];

const PackingList = () => {
  //   const [lists, setLists] = useState([]);

  //   setLists((currList) => {
  //     return { ...currList, ...initialItems };
  //   });

  //   const removeList = (id) => {
  //     setLists((currList) => currList.filter((l) => l.id !== id));
  //   };

  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
