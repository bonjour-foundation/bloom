import {newE2EPage} from '@stencil/core/testing';

describe('range', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-range></bonjour-range>');
    const element = await page.find('bonjour-range');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a range input', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-range></bonjour-range>');
    const input = await page.find('bonjour-range >>> input');

    expect(input).not.toBe(null);
    expect(input.getAttribute('type')).toEqual('range');
  });
});
