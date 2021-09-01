import React, { useState } from 'react'
import CaixaTeste from '../caixaTeste/CaixaTeste'

export default function Corpo() {
    
    const [p, setP] = useState(<span>VALOR INICIAL DO P</span>)
    
    return (
        <div>
            <div>
                <h2>Solução do Exercício de [USE-STATE]</h2>
                <p onClick={()=> setP(<span>VALOR DO <b>P</b> ALTERADO</span>)} onDoubleClick={()=> setP(<span>VALOR DO <b>P</b> REINICIADO</span>)}>{p}</p>

                <CaixaTeste valorAttrib={p}/>

            </div>
        </div>
    )
}
