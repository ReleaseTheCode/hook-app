import React from 'react';
import ReactDOM from 'react-dom';
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';

ReactDOM.render(
  //<HookApp />,
  //<CounterApp/>,
  //<CounterWithCustomHook/>,
  //<SimpleForm/>,
  //<FormWithCustomHook/>,
  //<MultipleCustomHooks/>,
  <FocusScreen/>,
  document.getElementById('root')
);
