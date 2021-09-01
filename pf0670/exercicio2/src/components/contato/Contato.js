import React from 'react'

export default function Contato() {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Contato</legend>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="txtNm" placeholder="Nome"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="txtEmail" placeholder="Email"/>
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea cols="30" rows="10" name="txtMsg"></textarea>
                    </div>
                    <div>
                        <input type="button" value="ENVIAR"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
