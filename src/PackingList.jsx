import List from './List';

const PackingList = ({ items, onRemoveItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <List onRemoveItem={onRemoveItem} item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
