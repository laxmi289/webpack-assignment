import './App.scss';

class App {
  // Nav bar elements
  navdivEl = document.createElement('div');
  navlogoEl = document.createElement('div');
  navtextDivEl = document.createElement('div');
  navtextEl = document.createElement('h1');
  mycartEl = document.createElement('div');
  logoImg = document.createElement('img');

  constructor() {
    //Navigation
    this.navdivEl.setAttribute('id', 'navbar');
    this.navlogoEl.setAttribute('id', 'logo-container');
    this.logoImg.setAttribute('src', 'shop-logo.jpg');
    this.navtextDivEl.setAttribute('id', 'text-container');
    this.navtextEl.setAttribute('id', 'para1');
    this.mycartEl.setAttribute('id', 'mycart');
    this.logoImg.setAttribute('id', 'logo-img');

    this.navtextEl.textContent = 'This is navbar';
    this.navlogoEl.textContent = 'this is logo';
    this.mycartEl.textContent = 'this is cart';
  }

  render() {
    //Appending navigation elements
    this.navdivEl.append(this.navlogoEl);
    this.navlogoEl.append(this.logoImg);
    this.navdivEl.append(this.navtextDivEl);
    this.navtextDivEl.append(this.navtextEl);
    this.navdivEl.append(this.mycartEl);

    return this.navdivEl;
  }
}

export default App;
