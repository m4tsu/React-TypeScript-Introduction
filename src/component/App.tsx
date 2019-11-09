import React, { FC, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Counter from './Counter';
import Greeting from './Greeting';

const App: FC = () => {
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  const changeName= (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const changeTime= (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt(event.target.value, 10));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <input value={name} onChange={changeName}></input>
        <input type='number' value={time} onChange={changeTime}></input>
      </div>
      <Greeting
        name={name}
        time={time}
      />
    </div>
  );
}

export default App;
