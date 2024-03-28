import Item from './Item';

const Accordion = ({ data }) => {
  return (
    <div className='accordion'>
      {data.map((el, i) => (
        <Item key={el.title} num={i} title={el.title} text={el.text} />
      ))}
    </div>
  );
};
export default Accordion;
