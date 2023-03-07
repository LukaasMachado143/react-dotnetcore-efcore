
import { useState } from 'react';
import './App.css';


let initiaState = [];

function App() {
  const [atividades, setAtividades] = useState(initiaState)

  function AddAtividade(e){
    e.preventDefault();
    const atividade = {
          id: document.getElementById('id').value,
          descricao: document.getElementById('descricao').value,
          prioridade: document.getElementById('inputPrioridade').value,
          titulo: document.getElementById('titulo').value
      }
    setAtividades([ ...atividades, { ...atividade}]);
  }

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

  function CountId(){
    if (Math.max.apply(Math,atividades.map((item) => item.id)) < 1){
      return 1
    } else {return Math.max.apply(Math,atividades.map((item) => item.id)) +1}
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">ID:</label>
          <input type="text" className="form-control" id="id" readOnly value={CountId()} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Título:</label>
          <input type="text" className="form-control" id="titulo" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="inputPrioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Descrição:</label>
          <input type="text" className="form-control" id="descricao" />
        </div>

        <hr />
        <div className="col-12">
          <button 
            className="btn btn-outline-secondary"
            onClick={AddAtividade}
          >
            Adicionar Atividade
          </button>
        </div>
      </form>
    
      <div className="mt-3">
        {atividades.map(ativ => (
          <div key={ativ.id} className={"card mb-2 shadow-sm border-"+PrioridadeStyle(ativ.prioridade)}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-2">{ativ.id}</span>
                   - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={"ms-1 text-"+PrioridadeStyle(ativ.prioridade)}>
                    <i className={"me-1 fa-regular fa-face-"+PrioridadeStyle(ativ.prioridade,true)}></i>
                    {PrioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>

              </div>
              <p className="card-text"> {ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'>
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger'>
                  <i className='fas fa-trash me-2'></i>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
