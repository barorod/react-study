const Card = ({ q, handleClick, select }) => {
  return (
    <div onClick={handleClick} className={q.id === select ? 'selected' : ''}>
      <p>{q.id === select ? q.answer : q.question}</p>
    </div>
  );
};
export default Card;
