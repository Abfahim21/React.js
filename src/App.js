import './App.css';
import Counter from './components/Counter';
import DestructuringProps from './components/DestructuringProps';
import DestructuringPropsClassComponent from './components/DestructuringPropsClassComponent';
import Hello from './components/Hello';
import StatePractice from './components/StatePractice';

function App() {
  return (
    <div className="App">
      <StatePractice/>
      <Hello value='practice'>React.JS props</Hello>
      <Counter/>
      <DestructuringProps d1='Destructuring' d2='Props'/>
      <DestructuringPropsClassComponent d3 = 'React.JS' d4 = 'Class'/>
    </div>
  );
}

export default App;
