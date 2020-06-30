import { newSpecPage } from '@stencil/core/testing';
import { WebList } from './web-list';

describe('web-list', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [WebList],
      html: '<web-list></web-list>'
    });
    expect(root).toEqualHtml(`
      <web-list>
        <mock:shadow-root>
          <div class="WebList">
            <div class="WebList__name"></div>
            <div class="WebList__list"></div>
          </div>
        </mock:shadow-root>
      </web-list>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [WebList],
      html: `<web-list name="Menu"></web-list>`
    });
    expect(root).toEqualHtml(`
      <web-list name="Menu">
        <mock:shadow-root>
          <div class="WebList">
            <div class="WebList__name">
                Menu
            </div>
            <div class="WebList__list"></div>
          </div>
        </mock:shadow-root>
      </web-list>
    `);
  });
});
