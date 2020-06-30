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
          <div class="AppBar">
            <div class="AppBar__menu">
              <div class="AppBar__menu--icon">
                <img src="/assets/hamburger.svg">
              </div>
              <div class="AppBar__menu--items"></div>
            </div>
            <div class="AppBar__name"></div>
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
      <app-bar name="Menu">
        <mock:shadow-root>
          <div class="AppBar">
            <div class="AppBar__menu">
              <div class="AppBar__menu--icon">
                <img src="/assets/hamburger.svg">
              </div>
              <div class="AppBar__menu--items"></div>
            </div>
            <div class="AppBar__name">
              Menu
            </div>
          </div>
        </mock:shadow-root>
      </app-bar>
    `);
  });
});
