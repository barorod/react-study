const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding items to your packing list</em>
      </p>
    );

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const totalPackedPct = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {totalPackedPct === 100
          ? 'You got everything! Ready to go ✈️'
          : `🎒 You have ${totalItems} item on your list, and you already packed ${totalPacked} (${totalPackedPct}%)`}
      </em>
    </footer>
  );
};
export default Stats;
