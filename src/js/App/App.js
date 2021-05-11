import './App.scss';

class App {
  // headerEl = document.createElement('h1');
  // appContainerEl = document.createElement('div');

  /*My Code*/

  // Nav bar elements
  navdivEl = document.createElement('div');
  navlogoEl = document.createElement('div');
  navtextDivEl = document.createElement('div');
  navtextEl = document.createElement('h1');
  mycartEl = document.createElement('div');
  logoImg = document.createElement('img');

  //Side panel elements
  // sidePanelEl = document.createElement('div');

  constructor() {
    // this.headerEl.setAttribute('id', 'myheader');
    // this.appContainerEl.setAttribute('id', 'app');
    // this.headerEl.textContent = 'Hi everyone';

    /*My Code*/

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

    //Side panel
    // this.appContainerEl.setAttribute('id', 'app');
    // this.sidePanelEl.setAttribute('id', 'side-panel-container');
  }

  render() {
    // this.appContainerEl.append(this.headerEl);

    /*My code*/

    //Appending navigation elements
    this.navdivEl.append(this.navlogoEl);
    this.navlogoEl.append(this.logoImg);
    this.navdivEl.append(this.navtextDivEl);
    this.navtextDivEl.append(this.navtextEl);
    this.navdivEl.append(this.mycartEl);

    // this.appContainerEl.append(this.navdivEl);

    //Appending Side panel elements
    // this.appContainerEl.append(this.sidePanelEl);
    /*End*/

    return this.navdivEl;
  }
}

export default App;
