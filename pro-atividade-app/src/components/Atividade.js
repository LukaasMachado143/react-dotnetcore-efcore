import React from 'react'

export default function Atividade(props) {
  
  function PrioridadeLabel(aux){
    switch(aux){
       case "1": return "Baixa";
       case "2": return "Média";
       case "3": return "Alta";
       default: return "Não Definida"
    }
  }

  function PrioridadeStyle(aux, icon){
    switch(aux){
       case "1": return icon ? "smile": "success";
       case "2": return icon ? "meh": "warning";
       case "3": return icon ? "frown": "danger";
       default: return "Não Definida"
    }
  }

  return (
    <div className={"card mb-2 shadow-sm border-"+PrioridadeStyle(props.ativ.prioridade)}>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>
            <span className="badge bg-secondary me-2">{props.ativ.id}</span>
              - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={"ms-1 text-"+PrioridadeStyle(props.ativ.prioridade)}>
              <i className={"me-1 fa-regular fa-face-"+PrioridadeStyle(props.ativ.prioridade,true)}></i>
              {PrioridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text"> {props.ativ.descricao}</p>
        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
          <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.PegarAtividade(props.ativ.id)}>
            <i className='fas fa-pen me-2'></i>
            Editar
          </button>
          <button className='btn btn-sm btn-outline-danger' onClick={() => props.DeletarAtividade(props.ativ.id)}>
            <i className='fas fa-trash me-2'></i>
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}
