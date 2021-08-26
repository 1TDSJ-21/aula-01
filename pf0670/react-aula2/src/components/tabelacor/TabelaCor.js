import React,{useState} from 'react'
import './TabelaCor.css'

export default function TabelaCor(props) {

    
    return (
        <table style={props.estilo} className="tbl-cores">
            <tr>
                <td onClick={()=> props.valorCel(1)}>1</td>
                <td onClick={()=> props.valorCel(2)}>2</td>
            </tr>
            <tr>
                <td onClick={()=> props.valorCel(3)}>3</td>
                <td onClick={()=> props.valorCel(4)}>4</td>
            </tr>
        </table>
        
    )
}
