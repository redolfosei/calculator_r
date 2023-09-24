import { useState } from 'react';
import './App.css';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

//react key-bind.
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { withShortcut, ShortcutProvider, ShortcutConsumer } from 'react-keybind'

function App() {

  const [value,setValue] = useState("");

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={s => setValue('')}/>
            <input type="button" value="DEL" onClick={s => setValue(value.slice(0,-1))}/>
            <input type="button" value="." onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="/" onClick={s => setValue(value + s.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="8" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="9" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="*" onClick={s => setValue(value + s.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="5" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="6" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="+" onClick={s => setValue(value + s.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="2" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="3" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="-" onClick={s => setValue(value + s.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="0" onClick={s => setValue(value + s.target.value)}/>
            <input type="button" value="=" className='equalTo' onClick={s => setValue(eval(value))}/>
            <input type="button" value="Q" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
