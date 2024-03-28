import { useState } from 'react';

const Item = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((currIsOpen) => !currIsOpen);
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen ? <div className='content-box'>{text}</div> : null}
    </div>
  );
};
export default Item;
