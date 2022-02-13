import './App.css';
import Counter from './components/Counter';
import DestructuringProps from './components/DestructuringProps';
import DestructuringPropsClassComponent from './components/DestructuringPropsClassComponent';
import EventHandler from './components/EventHandler';
import Hello from './components/Hello';
import ParentComponent from './components/ParentComponent';
import StatePractice from './components/StatePractice';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import Form from './components/Form';
import Refs from './components/Refs';
import HOCv1 from './components/HOCv1';
import HoverCounter from './components/HoverCounter';
import { FocusInput } from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <StatePractice/>
      <Hello value='practice'>React.JS props</Hello>
      <Counter/>
      <DestructuringProps d1='Destructuring' d2='Props'/>
      <DestructuringPropsClassComponent d3 = 'React.JS' d4 = 'Class'/>
      <EventHandler/>
      <ParentComponent/>
      <ConditionalRendering/>
      <NameList/>
      <Form/>
      <Refs/>
      <HOCv1/>
      <HoverCounter/>
      <FocusInput/>
    </div>
  );
}

export default App;
