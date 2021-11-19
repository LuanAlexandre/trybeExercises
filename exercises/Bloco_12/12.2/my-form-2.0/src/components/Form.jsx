import React from 'react';
import PersonalData from './PersonalData';
import '../styles/Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      homeType: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [ name ]: value,
    }));
  }

  clearField({ target }) {
    const { name, value } = target;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const isNumber = numbers.some((number) => value.charAt() === number);
    if(isNumber) {
      this.setState(() => ({
        [name]: '',
      }));
    }
  }

  render () {
    return (
      <main className="main-form" >
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />
        <PersonalData value={ this.state }  handleChange={ this.handleChange } clearField={ this.clearField } />
      </main>
    );
  }
}
