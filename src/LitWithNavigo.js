import { html, css, LitElement } from 'lit';
import Navigo from 'navigo';

export class LitWithNavigo extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-with-navigo-text-color, #000);
    }
  `;

  static properties = {
    route: { type: Object },
  };

  constructor() {
    super();

    this.router = new Navigo('/demo/', { hash: true });

    this.router
      .on({
        '/': () => this.route = this.renderHome(),
        '/about': () => this.route = this.renderAbout(),
        '/contact': () => this.route = this.renderContact()
        })
      .resolve();
  }

  renderHome() {
    return html`
      <h1>Home</h1>
      <p>Welcome to my app!</p>
    `;
  }

  renderAbout() {
    return html`
      <h1>About</h1>
      <p>This is a simple app that demonstrates Navigo routing with Lit components.</p>
    `;
  }

  renderContact() {
    return html`
      <h1>Contact</h1>
      <p>If you have any questions or feedback, please contact me at example@example.com.</p>
    `;
  }

  render() {
    return html`
      <nav>
        <a href="#/" @click=${() => this.router.navigate('/')}>Home</a>
        <a href="#/about" @click=${() => this.router.navigate('/about')}>About</a>
        <a href="#/contact" @click=${() => this.router.navigate('/contact')}>Contact</a>
      </nav>
      <main>
        ${this.route || this.renderHome()}
      </main>
    `;
  }
}
