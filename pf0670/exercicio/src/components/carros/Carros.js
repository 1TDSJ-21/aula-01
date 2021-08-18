import React from 'react'
import imgCarro from '../../img/carro-base.jpg'

export default function Carros(props){
    return(
        <>
        <img src={imgCarro} width="50%"/>
        <ul>
            <li>{props.insereCarros[0]}</li>
            <li>{props.insereCarros[1]}</li>
            <li>{props.insereCarros[2]}</li> 
            <li>{props.insereCarros[3]}</li>
            <li>{props.insereCarros[4]}</li>
            <li>{props.insereCarros[5]}</li>
            <li>{props.insereCarros[6]}</li>
            <li>{props.insereCarros[7]}</li>
        </ul>
        </>
    )
}