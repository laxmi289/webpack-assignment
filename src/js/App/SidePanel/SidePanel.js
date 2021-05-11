import './SidePanel.scss';

class SidePanel {
  sidePanelEl = document.createElement('div');

  constructor() {
    this.sidePanelEl.setAttribute('id', 'side-panel-container');
  }

  render() {
    this.appContainerEl.append(this.sidePanelEl);

    return this.sidePanelEl;
  }
}

export default SidePanel;
