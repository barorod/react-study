const Stats = ({ items }) => {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  return (
    <footer className='stats'>
      <em>
        🎒 You have {totalItems} item on your list, and you already packed{' '}
        {totalPacked} ({`${Math.round((totalPacked / totalItems) * 100)}%`})
      </em>
    </footer>
  );
};
export default Stats;
