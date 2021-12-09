import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "ir a black friday",
        completa: true
      },
      {
        id: Date.now(),
        texto: "Comprar Aparelhos",
        completa: false
      },
      {
        id: Date.now(),
        texto: "Ir ao Banco",
        completa: false
      }

    ],
    inputValue: '',
    filtro: '',

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputValue !== this.state.inputValue)
    localStorage.setItem("tarefa",this.state.inputValue)
    console.log("tarefa salva")

    if(prevState.filtro !== this.state.filtro)
    localStorage.setItem("tarefa",this.state.filtro)
    console.log("status tarefa")

    if(prevState.tarefas !== this.state.tarefas)
    localStorage.setItem("tarefa",this.state.tarefas.id)
    console.log("array")

    if(prevState.tarefas !== this.state.tarefas)
    localStorage.setItem("tarefa",this.state.tarefas.texto)
    console.log("array")

    if(prevState.tarefas !== this.state.tarefas)
    localStorage.setItem("tarefa",this.state.tarefas.completa)
    console.log("array")
  };

  componentDidMount() {
    this.selectTarefa();
    const idLS = localStorage.getItem("id") || "";
    const inputValueLS = localStorage.getItem("inputValue") || "";
    const completaLS = localStorage.getItem("completa") || "";

    this.setState({ id: idLS, inputValue: inputValueLS, completa: completaLS });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novaListaTarefas })
    console.log("ok produto encestado!!")
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((propriedade) => {
      if (id === propriedade.id) {
        const status = {
          ...propriedade,
          completa: !propriedade.completa
        }
        return status
      } else {
        return propriedade
      }
    })
    this.setState({ tarefas: novaListaTarefas })
    localStorage.setItem("Tarefa-Status", JSON.stringify(novaListaTarefas));
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input placeholder="Informe a tarefa.." value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={(event) => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
