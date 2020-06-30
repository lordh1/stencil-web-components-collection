import { newE2EPage } from '@stencil/core/testing';

describe('app-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-bar></app-bar>');
    const element = await page.find('app-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-bar></app-bar>');
    const component = await page.find('app-bar');
    const element = await page.find('app-bar >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('name', 'Menu');
    await page.waitForChanges();
    expect(element.textContent).toEqual('Menu');
  });
});
