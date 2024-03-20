import './App.css';
import './Pizza.css';
import PizzaHeader from './PizzaHeader';
import PizzaFooter from './PizzaFooter';
import Pizza from './Pizza';
import { pizzaData } from './data';
import { useEffect } from 'react';

const App = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  useEffect(() => {
    document.title = 'Fast React Pizza Co.';
  }, []);

  return (
    <div className='container'>
      <PizzaHeader />
      <main className='menu'>
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : null}
      </main>
      <PizzaFooter />
    </div>
  );
};

export default App;
