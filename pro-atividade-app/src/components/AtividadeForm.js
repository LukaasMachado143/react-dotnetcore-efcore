import {useEffect, useState} from 'react'

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: ""
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual())

  useEffect( () => {
    if (props.ativSelecionada.id  !== 0){
      setAtividade(props.ativSelecionada)
    }

  }, [props.ativSelecionada])
  
  const InputTextHandler = (e) => {  
    const {name, value} = e.target;
    setAtividade({...atividade, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (props.ativSelecionada.id !== 0){
      props.AtualizarAtividade(atividade);
    } else{
      props.AddAtividade(atividade);
    }

    setAtividade(atividadeInicial);
  }

  const handleCancelar = (e) => {
    e.preventDefault();
    props.CancelarAtividade(); 
    setAtividade(atividadeInicial);
  }

  function atividadeAtual(){
    if (props.ativSelecionada.id !== 0){
      return props.ativSelecionada
    }else{
      return atividadeInicial;
    }
  }

  return (
    <>
    <h1>{props.ativSelecionada.id !== 0 ? 'Alterar Atividade: ' + props.ativSelecionada.id : 'Cadastrar Nova Atividade'}</h1>
    <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título:</label>
          <input 
            name="titulo"
            onChange={InputTextHandler}
            value={atividade.titulo}
            type="text" 
            className="form-control" 
            id="titulo" 
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select 
            name="inputPrioridade"
            onChange={InputTextHandler}
            value={atividade.inputPrioridade}
            id="inputPrioridade" 
            className="form-select"
          >
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Descrição:</label>
          <textarea 
            name="descricao"
            onChange={InputTextHandler}
            value={atividade.descricao}
            type="text" 
            className="form-control" 
            id="descricao" />
        <hr />
        </div>

        <div className="col-12 mt-0">
          {atividade.id === 0 ? (
            <button 
              className="btn btn-outline-secondary"
              type='submit'
            >
              <i className='fas fa-plus me-2'></i>
              Atividade
            </button>
            ):(
              <> 
                <button 
                  className="btn btn-outline-success me-2"
                  type='submit'
                >
                  <i className='fas fa-plus me-2'></i>
                  Salvar
                </button>
                <button 
                  className="btn btn-outline-danger"
                  onClick={handleCancelar}
                >
                  <i class="fa-sharp fa-regular fa-circle-xmark me-2"></i>
                  Cancelar
                </button>
            </>
            )}
          
        </div>
      </form>
      </>
  )
}
