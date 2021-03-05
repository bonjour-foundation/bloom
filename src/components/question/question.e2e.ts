import {newE2EPage} from '@stencil/core/testing';

describe('question', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-question></bonjour-question>');
    const element = await page.find('bonjour-question');
    expect(element).toHaveClass('hydrated');
  });

  it('should render text slots', async () => {
    const page = await newE2EPage();

    await page.setContent(`<bonjour-question>
        <h1 slot="question">Default value?</h1>
    </bonjour-question>`);

    const slot = await page.find('bonjour-question >>> slot[name="question"]');
    expect(slot).not.toBe(null)

    const element = await page.find('bonjour-question h1');
    expect(element.getAttribute('slot')).toEqual('question')
  });
});
