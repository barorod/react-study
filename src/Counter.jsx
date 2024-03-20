const Counter = ({ text, count, minus, plus }) => {
  return (
    <div>
      <span>
        <button onClick={minus}>-</button>
      </span>
      {text}: {count}
      <span>
        <button onClick={plus}>+</button>
      </span>
    </div>
  );
};

export default Counter;
