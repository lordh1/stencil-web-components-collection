import { newE2EPage } from '@stencil/core/testing';

describe('web-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<web-list></web-list>');
    const element = await page.find('web-list');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<web-list></web-list>');
    const component = await page.find('web-list');
    const element = await page.find('web-list >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('name', 'List');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`List`);
  });
});
