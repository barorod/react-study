import { useState } from 'react';
import Counter from './Counter';

const DateToday = () => {
  const [counts, setCounts] = useState({ count: 0, step: 1 });

  const handlePlus = (val) => {
    if (val === 'step') {
      setCounts((c) => ({ ...c, [val]: c[val] + 1 }));
    } else {
      setCounts((c) => ({ ...c, count: c.count + counts.step }));
    }
  };

  const handleMinus = (val) => {
    if (val === 'step') {
      setCounts((c) => ({ ...c, [val]: c[val] - 1 }));
    } else {
      setCounts((c) => ({ ...c, count: c.count - counts.step }));
    }
  };
  const date = new Date();
  date.setDate(date.getDate() + counts.count);
  return (
    <div>
      <Counter
        text={'Step'}
        count={counts.step}
        plus={() => handlePlus('step')}
        minus={() => handleMinus('step')}
      />
      <Counter
        text={'Count'}
        count={counts.count}
        plus={() => handlePlus('count')}
        minus={() => handleMinus('count')}
        step={counts.step}
      />
      <p>
        {counts.count === 0
          ? 'Today is '
          : counts.count > 0
          ? `${counts.count} days from today is `
          : `${Math.abs(counts.count)} days ago was `}
        {date.toDateString()}
      </p>
    </div>
  );
};

export default DateToday;
