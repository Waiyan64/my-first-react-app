import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Apple from './Apple';
import Pear from './Pear';
import Bag from './Bag';
import Example from './Example';

const bool = false;
const str1 = "just";

function App() {
  return (
    <div className="App">
      <Heading firstName="Thomas" />
      <Heading firstName="Anyname other than Bob" />
      <Bag children={<Pear friend="Peter"/>} />
      <Bag children={<Apple color="yellow" number="3"/>} />
      <Example 
      toggleBoolean = {!bool}
      math = {10+20}
      str = {str1+ 'another' + 'string'}
      />
    </div>
  );
  
}

export default App;
