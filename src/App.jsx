import React from 'react';
import { Parallax } from 'react-parallax';
import initial from './assets/img/initial.jpg'
import grifinoria from './assets/img/grifinoria.jpg'
import sonserina from './assets/img/sonserina.jpg'
import lufalufa from './assets/img/lufalufa.jpg'
import corvinal from './assets/img/corvinal.jpg'

function App() {
  return (
    <div className="App">
      <Parallax
        bgImage={initial}
        strength={300}
      >
        <div style={{ height:'100vh'}}>
          <h1>Primeira camada</h1>
        </div>
      </Parallax>
      <Parallax
        bgImage={grifinoria}
        strength={200}
      >
        <div style={{ height:'100vh'}}>
          <h1>Segunda camada</h1>
        </div>
      </Parallax>
      <Parallax
        bgImage={sonserina}
        strength={100}
      >
        <div style={{ height:'100vh'}}>
          <h1>Terceira camada</h1>
        </div>
      </Parallax>

      <Parallax
        bgImage={lufalufa}
        strength={100}
      >
        <div style={{ height:'100vh'}}>
          <h1>Terceira camada</h1>
        </div>
      </Parallax>

      <Parallax
        bgImage={corvinal}
        strength={100}
      >
        <div style={{ height:'100vh'}}>
          <h1>Terceira camada</h1>
        </div>
      </Parallax>
    </div>
  );
}

export default App;