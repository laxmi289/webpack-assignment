import './App.scss';

class App {
  headerEl = document.createElement('h1');
  appContainerEl = document.createElement('div');

  constructor() {
    this.headerEl.setAttribute('id', 'myheader');
    this.appContainerEl.setAttribute('id', 'app');
    this.headerEl.textContent = 'Hi everyone';
  }

  render() {
    this.appContainerEl.append(this.headerEl);
    return this.appContainerEl;
  }
}

export default App;
