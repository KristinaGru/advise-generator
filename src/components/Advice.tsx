import { useEffect, useState } from 'react';
import divider from '../assets/pattern-divider.svg';
import dice from '../assets/icon-dice.svg';

const Advice = () => {
  type Advice = {
    slip: {
      id: number;
      advice: string;
    };
  };

  const [advice, setAdvice] = useState<Advice>();

  const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data: Advice = await res.json();
    setAdvice(data);
  };

  useEffect(() => {
    getAdvice().catch(console.error);
  }, []);

  return (
    <div className="box">
      {advice ? (
        <>
          <div className="id">ADVICE #{advice.slip.id}</div>
          <div>“{advice.slip.advice}”</div>
          <img className="divider" src={divider} />
        </>
      ) : (
        <div>loading...</div>
      )}
      <button type="button" onClick={() => getAdvice()}>
        <img src={dice} />
      </button>
    </div>
  );
};

export default Advice;
