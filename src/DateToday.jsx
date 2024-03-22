import { useState } from 'react';
import Counter from './Counter';

const DateToday = () => {
  const [counts, setCounts] = useState({ count: 0, step: 1 });
  const handleReset = () => setCounts((c) => ({ ...c, count: 0, step: 1 }));

  const date = new Date();
  date.setDate(date.getDate() + counts.count);
  return (
    <div>
      <input
        type='range'
        min='0'
        max='10'
        value={counts.step}
        onChange={(e) => setCounts({ ...counts, step: Number(e.target.value) })}
      />
      <span>Step: {counts.step}</span>
      <div>
        <button
          onClick={() =>
            setCounts((c) => ({ ...c, count: counts.count - counts.step }))
          }>
          -
        </button>
        <input
          type='text'
          value={counts.count}
          onChange={(e) =>
            setCounts((c) => ({ ...c, count: Number(e.target.value) }))
          }
        />
        <button
          onClick={() =>
            setCounts((c) => ({ ...c, count: counts.count + counts.step }))
          }>
          +
        </button>
      </div>

      <p>
        {counts.count === 0
          ? 'Today is '
          : counts.count > 0
          ? `${counts.count} days from today is `
          : `${Math.abs(counts.count)} days ago was `}
        {date.toDateString()}
      </p>
      {counts.count !== 0 || counts.step !== 1 ? (
        <div>
          <button onClick={handleReset}>reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default DateToday;
