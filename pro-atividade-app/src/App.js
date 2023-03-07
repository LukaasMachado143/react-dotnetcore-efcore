
import { useState } from 'react';
import './App.css';


let initiaState = [
  {
    id: 1,
    descricao: "Primeira Atividade"
  },
  {
  id: 2,
  descricao: "Segunda Atividade"
  }
];
  


function App() {
  const [atividades, setAtividades] = useState(initiaState)

  function AddAtividade(e){
    e.preventDefault();
    const atividade = {
          id: document.getElementById('id').value,
          descricao: document.getElementById('descricao').value
      }
    setAtividades([ ...atividades, { ...atividade}]);
  }

  return (
    <>
      <form class="row g-3">
        <div class="col-md-6">
          <label class="form-label">ID:</label>
          <input type="text" class="form-control" id="id" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Descrição:</label>
          <input type="text" class="form-control" id="descricao" />
        </div>
        <hr />
        <div class="col-12">
          <button 
            class="btn btn-outline-secondary"
            onClick={AddAtividade}
          >
            Adicionar Atividade
          </button>
        </div>
      </form>
    
      <div className="mt-3">
        {atividades.map(ativ => (
          <div key={ativ.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-2">{ativ.id}</span>
                   - Título
                </h5>
                <h6>
                  Prioridade: Alta   
                </h6>

              </div>
              <p className="card-text"> {ativ.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
