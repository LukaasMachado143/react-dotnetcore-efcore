
import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadesListas from './components/AtividadesLista'

function App() {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id:0})

  useEffect ( () => {
    if (atividades.length <= 0){
      setIndex(1)
    } else{
      setIndex(Math.max.apply(Math,atividades.map((item) => item.id)) +1)
    }
  },[atividades])

  function AddAtividade(ativ){
    setAtividades([ ...atividades, { ...ativ, id:index}]);
  }

  function AtualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item ))
    setAtividade({id:0})
  }

  function CancelarAtividade(){
    setAtividade({id:0})
  }

  function DeletarAtividade(id){
    const atividadesFiltradas = atividades.filter(ativ => ativ.id !== id);
    setAtividades([ ...atividadesFiltradas])
  }

  function PegarAtividade(id){
    const atividade = atividades.filter(ativ => ativ.id === id);
    setAtividade(atividade[0])
  }

  return (
    <>
      <AtividadeForm 
        AddAtividade = {AddAtividade}
        atividades = {atividades}
        ativSelecionada = {atividade}
        AtualizarAtividade = {AtualizarAtividade}
        CancelarAtividade = {CancelarAtividade}
      />
      <AtividadesListas 
        atividades = {atividades}
        DeletarAtividade = {DeletarAtividade}
        PegarAtividade = {PegarAtividade}
      />
      
    </>
  );
}

export default App;
