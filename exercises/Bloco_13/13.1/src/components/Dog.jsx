{ /* Solução retirada do gabarito */ }
import React, { Component } from 'react'

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagePath: '',
      loading: false,
    };

    this.requestApi = this.requestApi.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  shouldComponentUpdate( _nextProps, { imagePath }) {
    return !(imagePath.includes("terrier"));
  }

  componentDidUpdate() {
    const { imagePath } = this.state;
    localStorage.setItem('dogURL', imagePath);
    alert(imagePath.split("/")[4]);
  }

  requestApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((dog => dog.json()))
        .then(({ message }) => {
          this.setState({
            imagePath: message,
          });
        });
  }

  // handleClick() {
  //   this.setState(
  //     { loading: true },
  //     async () => {
  //       const apiAnswer = await fetch('https://dog.ceo/api/breeds/image/random');
  //       const dogData = await apiAnswer.json();
  //       const{ message } = dogData;
  //       this.setState({
  //         imagePath: message,
  //         loading: false,
  //       });
  //     }
  //   );
  // }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderDogImage() {
    const { imagePath } = this.state;
    return (
      <div>
        <img src={ imagePath } alt="foto do cachorro" width="500px" height="500px"></img>
        <div>
          <button type="button" onClick={ this.requestApi }>New Dog</button>
        </div>
      </div>
    );
  }

  render() {
    const { imagePath } = this.state;
    return (
      <div>
        { imagePath === '' ? this.renderLoading() : this.renderDogImage() }
      </div>
    )
  }
}
