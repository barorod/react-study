import Accordion from './Accordion';
import { faqs } from './faqs';
// import './App.css';
import './styles.css';

const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

export default App;
