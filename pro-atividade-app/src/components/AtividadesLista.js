import React from 'react'
import Atividade from './Atividade';

export default function AtividadesLista(props) {
  return (
    <div className="mt-3">
        {props.atividades.map(ativ => (
          <Atividade 
            key={ativ.id}
            ativ = {ativ}
            DeletarAtividade = {props.DeletarAtividade}
            PegarAtividade = {props.PegarAtividade}
          />
        ))}
      </div>
  )
}
