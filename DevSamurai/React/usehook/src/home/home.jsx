import React from 'react'
import { Container, Main, } from './style.js'
import "../App.css"
import { useState } from 'react';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState(""); // Estado para armazenar o valor selecionado
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false); // Estado para controlar a exibição das informações adicionais

  function handleSelectChange(event) {
    setSelectedValue(event.target.value); // Atualiza o estado com o valor selecionado
    setShowAdditionalInfo(false)
  }

  function handleSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    setShowAdditionalInfo(true); // Mostra as informações adicionais
  }

  let AdditionalInfo = null; // Variável para armazenar as informações adicionais

  if (showAdditionalInfo) {
    if(selectedValue === "Audi"){
      AdditionalInfo = (
      <div className='transition'>
        {/* Aqui você pode colocar as informações adicionais que deseja mostrar */}
        <p>conta com modelos como a audi rs3, rs4, rs6, audi tt</p>
      </div>
    );
    }else if(selectedValue === "Bmw"){
      AdditionalInfo = (
        <div className='transition' id='transition'>
          {/* Aqui você pode colocar as informações adicionais que deseja mostrar */}
          <p>Conta com modelos como a M3 gtr, a BMW m2, m3, m4</p>
        </div>
      );
    }
    // Se showAdditionalInfo for verdadeiro, renderiza as informações adicionais

  }

  return (
    <Container>
      <Main>
        <select name="select1" id="selection" onChange={handleSelectChange}>
          <option value="">Selecione uma opção</option>
          <option value="Volvo">Volvo</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Audi">Audi</option>
          <option value="Bmw">Bmw</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </Main>
      {AdditionalInfo} {/* Renderiza as informações adicionais se showAdditionalInfo for verdadeiro */}
    </Container>
  );
}



