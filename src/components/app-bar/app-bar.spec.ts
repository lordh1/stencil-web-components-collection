import { newSpecPage } from '@stencil/core/testing';
import { AppBar } from './app-bar';

describe('app-bar', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [AppBar],
      html: '<app-bar></app-bar>'
    });
    expect(root).toEqualHtml(`
      <app-bar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </app-bar>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [AppBar],
      html: `<app-bar name="Menu"></app-bar>`
    });
    expect(root).toEqualHtml(`
      <app-bar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </app-bar>
    `);
  });
});
