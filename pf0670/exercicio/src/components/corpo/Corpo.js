import React from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
import Carros from '../carros/Carros'
import Parceiros from '../parceiros/Parceiros'

export default function Corpo() {


    const listaDeCarros = ['Corsa Sedan','Maverick','Corolla','Honda Fit','Camaro','Porsche','Ka','Opala']


   return(
      <>
         <Cabecalho/>
         <Carros insereCarros={listaDeCarros}/>
         <Parceiros/>
      </>
)}