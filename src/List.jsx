const List = ({ item, onRemoveItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description} - {item.quantity}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
};
export default List;
