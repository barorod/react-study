const List = ({ item, onRemoveItem, onToggleItem }) => {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description} - {item.quantity}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
};
export default List;
