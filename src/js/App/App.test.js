import App from './App';

describe('App', () => {
    it('should render the header', () => {
        const app = new App();
        const el = app.render();
        const headerEl = el.querySelector('#myheader');
        expect(headerEl).not.toBeNull();
        expect(headerEl.textContent).toBe('Hi everyone');
    });
});