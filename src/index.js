import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect } from 'react';

const Ruta = 'https://s3.amazonaws.com/freecodecamp/drums/';
const Elementos = [
  {
    sonido: 'Heater-1',
    tecla: 'Q',
    codigo: 81
  },
  {
    sonido: 'Heater-2',
    tecla: 'W',
    codigo: 87
  },
  {
    sonido: 'Heater-3',
    tecla: 'E',
    codigo: 69
  },
  {
    sonido: 'Heater-4_1',
    tecla: 'A',
    codigo: 65
  },
  {
    sonido: 'Heater-6',
    tecla: 'S',
    codigo: 83
  },
  {
    sonido: 'Dsc_Oh',
    tecla: 'D',
    codigo: 68
  },
  {
    sonido: 'Kick_n_Hat',
    tecla: 'Z',
    codigo: 90
  },
  {
    sonido: 'RP4_KICK_1',
    tecla: 'X',
    codigo: 88
  },
  {
    sonido: 'Cev_H2',
    tecla: 'C',
    codigo: 67
  },
];

function Boton({ fuente, teclaLlave, codigoLlave, actualizaDisplay }) {
  
  const [ temporal, setTemporal] = useState(teclaLlave);

  const handleOnKeyDown = (e) => {
    if (e.keyCode === codigoLlave) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown',handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown',handleOnKeyDown);
    }
  });

  const playSound = () => {
    const repSonido = document.getElementById(teclaLlave);
    repSonido.play();
    actualizaDisplay(fuente.replace(/-|_/g,' '))
  };

  return (
    <div 
      className='drum-pad' 
      id={fuente}
      onClick={playSound}
      >
        <audio 
          className='clip' 
          id={teclaLlave} 
          src={`${Ruta}${fuente}.mp3`} 
        />
        <p className='letra'>{teclaLlave}</p>
    </div>
  )
};

function Bateria({ actualizaDisplay, elementosTambores }) {
  let tambores = elementosTambores.map((tambor,i,arrTambores) => {
    return(
      <Boton 
        fuente={arrTambores[i].sonido} 
        teclaLlave={arrTambores[i].tecla}
        codigoLlave={arrTambores[i].codigo}
        actualizaDisplay={actualizaDisplay}
      />
    )
  })
  return <div className='bateria'>{tambores}</div>
}

function App() {

  const [display, setDisplay] = useState('Prueba');

  const actualizaDisplay = (texto) => {
    setDisplay(texto);
  }

  return (
    <div id='drum-machine'>
      <div className='display-container'>
        <p id='display'>{display}</p>
      </div>
      <Bateria 
        actualizaDisplay={actualizaDisplay} 
        elementosTambores={Elementos}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
Para la información revisar archivo README.md
*/