// ***********
import React from 'react';
import PropTypes from 'prop-types';
/*
const Cont = props => {
  return (
    <div>
      <h2>Contador</h2>
      <h2>Valor: {props.valorIni}</h2>
      <button>+1</button>
    </div>
  )
};*/

class Cont extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valorIni: this.props.valorIni
    };
  }

  sumCont() {
    this.setState({ valorIni : this.state.valorIni + 1 });
  }

  resetCont() {
    this.setState({ valorIni : 0 });
  }

  resCont() {
    this.setState({ valorIni : this.state.valorIni - 1 });
  }

  componentDidMount() {
    console.log("El componente se renderizo");
  }

  render() {
    return (
      <div>
      <h2>Contador</h2>
      <h2>Valor: {this.state.valorIni}</h2>
      <button onClick={() => this.sumCont()}>+1</button>
      <button onClick={() => this.resetCont()}>Reset</button>
      <button onClick={() => this.resCont()}>-1</button>
    </div>
    );
  }

};

Cont.propTypes = {
  valor : PropTypes.number
}

export default Cont;