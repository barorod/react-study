import { useEffect, useState } from 'react';

//Get the current count from local storage
const getInitialCount = () => {
  const data = JSON.parse(localStorage.getItem('count'));
  if (data === null) return 0;
  console.log(data);
  return data;
};

const Advice = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(getInitialCount);

  //Save the count to local storage
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  //async function to get an advice from api
  const getAdvice = async () => {
    const res = await fetch('https://api.quotable.io/quotes/random');
    const data = await res.json();

    //Set the advice using useState setAdvice
    setAdvice(data[0].content);

    //Set the read count
    setCount((c) => c + 1);
    console.log(data[0].content);
  };

  // Initial Advice using useEffect
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
};

export default Advice;
