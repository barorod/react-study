import { useState } from 'react';

const Form = () => {
  // Controlled elements
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => setDescription(e.target.value);

  // const selectOpt = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: crypto.randomUUID(),
    };

    setDescription('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* {selectOpt.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))} */}
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={handleChange}
        value={description}
        type='text'
        placeholder='Item...'
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
