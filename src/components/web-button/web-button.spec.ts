import { newSpecPage } from '@stencil/core/testing';
import { WebButton } from './web-button';

describe('web-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [WebButton],
      html: '<web-button></web-button>'
    });
    expect(root).toEqualHtml(`
      <web-button>
        <mock:shadow-root>
          <div class="WebButton"></div>
        </mock:shadow-root>
      </web-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [WebButton],
      html: `<web-button name="Menu"></web-button>`
    });
    expect(root).toEqualHtml(`
      <web-button name="Menu">
        <mock:shadow-root>
          <div class="WebButton">
            Menu
          </div>
        </mock:shadow-root>
      </web-button>
    `);
  });
});
