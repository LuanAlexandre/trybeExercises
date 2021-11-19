import React from 'react';
import '../styles/PersonalData.css';

export default class PersonalData extends React.Component {
  render() {
    const { value, handleChange, clearField } = this.props;
    const { name, email, cpf, adress, city, state } = value;
    return (
      <form className="personal-data-form" >
        <fieldset className="personal-data-form">
          <legend>Dados Pessoais</legend>
          <div className="mb-3">
            <label htmlFor="input-name" className="form-label">Nome:</label>
            <input
              className="form-control input-name"
              type="text"
              maxLength="40"
              name="name"
              value={ name.toUpperCase() }
              onChange={ handleChange }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-email" className="form-label" >E-mail:</label>
            <input
              className="form-control input-email"
              type="text"
              maxLength="50"
              name="email"
              value={ email }
              onChange={ handleChange }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-cpf" className="form-label" >CPF:</label>
            <input
              className="form-control input-cpf"
              type="text"
              maxLength="11"
              name="cpf"
              value={ cpf }
              onChange={ handleChange }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-adress" className="form-label" >Endereço:</label>
            <input
              className="form-control input-adress"
              type="text"
              maxLength="200"
              name="adress"
              value={ adress }
              onChange={ handleChange }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-city" className="form-label">Cidade:</label>
            <input
              className="form-control input-city"
              type="text"
              maxLength="28"
              name="city"
              value={ city }
              onChange={ handleChange }
              onBlur={ clearField }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-state" className="form-label">Estado:</label>
            <input
              className="form-control input-state"
              type="comboBox"
              name="state"
              value={ state }
              onChange={ handleChange }
              required
            />
          </div>

          Tipo da residência:
          <div className="form-check">
            <input
              className="form-check-input input-home"
              type="radio"
              name="homeType"
              value="Casa"
              onChange={ handleChange }
              required
            />
            <label className="form-check-label" htmlFor="input-home">Casa</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input input-apartment"
              type="radio"
              name="homeType"
              value="Apartamento"
              onChange={ handleChange }
              required
            />
            <label className="form-check-label" htmlFor="input-apartment">Apartamento</label>
          </div>
        </fieldset>
      </form>
    );
  }
}
