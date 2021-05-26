const changeBackgroundColor = () => {
  const getBackgroundColor = document.getElementById('div-background-color');
  getBackgroundColor.addEventListener('click', (event) => {
    document.body.style.backgroundColor = event.target.innerText;
  });
}

changeBackgroundColor();

const getFontColor = document.getElementById('div-font-color');
const getFontSize = document.getElementById('div-font-size');
const getFontSpacement = document.getElementById('div-font-spacement');
const getFontStyle = document.getElementById('div-font-style');