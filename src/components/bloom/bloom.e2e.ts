import {newE2EPage} from '@stencil/core/testing';

describe('bloom', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-bloom></bonjour-bloom>');
    const element = await page.find('bonjour-bloom');
    expect(element).toHaveClass('hydrated');
  });

  it('contains placeholder', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-bloom></bonjour-bloom>');
    const elements = await page.findAll('bonjour-bloom >>> div.placeholder');

    expect(elements).not.toBe(null);
    expect(elements.length).toEqual(6);
  });

  it('should render text slots', async () => {
    const page = await newE2EPage();

    await page.setContent(`<bonjour-bloom>
        <span slot="north-east" style="text-align: center; display: table">Soziale Einbettung</span>
    </bonjour-bloom>`);

    const slot = await page.find('bonjour-bloom >>> slot[name="north-east"]');
    expect(slot).not.toBe(null)

    const element = await page.find('bonjour-bloom span');
    expect(element.getAttribute('slot')).toEqual('north-east')
  });
});
