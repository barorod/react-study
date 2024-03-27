import List from './List';

const PackingList = ({ items, onRemoveItem, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <List
            onToggleItem={onToggleItem}
            onRemoveItem={onRemoveItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
