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
import ComponentA from './components/ComponentA';

function App() {
  return (
    <div className="App">
      <StatePractice/>
      <hr />
      <Hello value='practice'>React.JS props</Hello>
      <hr />
      <Counter/>
      <hr />
      <DestructuringProps d1='Destructuring' d2='Props'/> <hr />
      <DestructuringPropsClassComponent d3 = 'React.JS' d4 = 'Class'/> <hr />
      <EventHandler/> <hr />
      <ParentComponent/> <hr />
      <ConditionalRendering/> <hr />
      <NameList/> <hr />
      <Form/> <hr />
      <Refs/> <hr />
      <HOCv1/> <hr />
      <HoverCounter/> <hr />
      <FocusInput/> <hr />

      <userProvider userName='Abrar from Context'>
        <ComponentA/>
      </userProvider>
    </div>
  );
}

export default App;
