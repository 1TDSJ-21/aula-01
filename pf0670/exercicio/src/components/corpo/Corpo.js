import React, {useState} from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
import Carros from '../carros/Carros'
import Parceiros from '../parceiros/Parceiros'

export default function Corpo() {


   const listaDeCarros = ['Corsa Sedan','Maverick','Corolla','Honda Fit','Camaro','Porsche','Ka','Opala']
   const [carro, setCarro] = useState('')

   const addCarros = ()=>{
      listaDeCarros.push(carro)
      return listaDeCarros
   }

   return(
      <>
         <Cabecalho/>
         <Carros insereCarros={addCarros}/>
            <label>Adicione um carro</label>
            <input type="text" name="fcarro" value={carro}/>
         
         <button onClick={(e)=> setCarro(e.target.value)}>ADD</button>
         <Parceiros/>
      </>
)}