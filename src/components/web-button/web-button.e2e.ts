import { newE2EPage } from '@stencil/core/testing';

describe('web-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<web-button></web-button>');
    const element = await page.find('web-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<web-button></web-button>');
    const component = await page.find('web-button');
    const element = await page.find('web-button >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('name', 'List');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`List`);
  });
});
