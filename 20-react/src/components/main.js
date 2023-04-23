import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'tomar café',
      'beber água',
      'estudar',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input value={novaTarefa} onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => ())}
        </ul>
      </div>
    );
  }
}
