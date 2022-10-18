import './App.css';
import Board from './components/board/Board';
import React from 'react';


function App() {

    return (
    <div className="App">
      <header className="App-header">
      </header>

      <body ClassName ="App-body">
        <div ClassName="App-body-container">
          <Board />
        </div>
        <div className="App-body-buttons">

          <button type="button" class="btn">Iniciar</button>


        </div>
      </body>


    </div>
  );
  
}

export default App;
