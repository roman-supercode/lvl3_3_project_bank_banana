import { useState } from 'react';
import './App.css';

const bankImg = 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2479&q=80';
function App() {
  const [betrag, setBetrag] = useState(0);
  const [input, setInput] = useState(0);

  console.log(betrag);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const einzahlen = () => {
    setBetrag(betrag + Number(input));
    setInput("");
    document.querySelector("input").value = "";
  };

  console.log(input);

  const auszahlen = () => {
    setBetrag(betrag - Number(input));
    setInput("");
    document.querySelector("input").value = "";
  };

  if (betrag < 0) { alert("Du brauchst eine Schuldenberatung!!!"); }
  
  return (
    <div className='header'>
      <img id='logoImg' alt="banane"
        src={bankImg} />
      <h1 id='title'>Banana Bank</h1>
      <section className='konto'>
        <h2>Dein Girokonto</h2>
        <article className='.saldo'>
          <p className='.geldbetrag'>{betrag} €</p>
        </article>
        <input type={"number"} onChange={handleChange} placeholder={"Betrag eingeben"}></input>
        <div>
          <button type='button' onClick={einzahlen} className='einzahlen'>Einzahlen</button>
          <button type='button' onClick={auszahlen} className='auszahlen'>Auszahlen</button>
        </div>
      </section>
    </div >
  );
}

export default App;
