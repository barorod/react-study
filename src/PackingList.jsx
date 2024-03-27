import { useState } from 'react';
import List from './List';

const PackingList = ({ items, onRemoveItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className='list'>
        <ul>
          {sortedItems.map((item) => (
            <List
              onToggleItem={onToggleItem}
              onRemoveItem={onRemoveItem}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
        <div className='actions'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by packed</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default PackingList;

/* Sort with ascending and descending

import { useState } from 'react';
import List from './List';

const PackingList = ({ items, onRemoveItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState({ field: 'input', order: 'asc' });

  const handleSortChange = (field) => {
    if (sortBy.field === field) {
      // If already sorting by the same field, toggle the order
      setSortBy((prevSortBy) => ({
        ...prevSortBy,
        order: prevSortBy.order === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      // If sorting by a different field, default to ascending order
      setSortBy({ field, order: 'asc' });
    }
  };

  const sortItems = (a, b) => {
    const sortOrder = sortBy.order === 'asc' ? 1 : -1;
    switch (sortBy.field) {
      case 'description':
        return sortOrder * a.description.localeCompare(b.description);
      case 'packed':
        return sortOrder * (Number(a.packed) - Number(b.packed));
      default:
        return 0; // No sorting for 'input' field
    }
  };

  const sortedItems = [...items].sort(sortItems);

  return (
    <>
      <div className='list'>
        <ul>
          {sortedItems.map((item) => (
            <List
              onToggleItem={onToggleItem}
              onRemoveItem={onRemoveItem}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
        <div className='actions'>
          <select
            value={sortBy.field}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by packed</option>
          </select>
          <button onClick={() => handleSortChange(sortBy.field)}>
            Toggle Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PackingList;
*/
