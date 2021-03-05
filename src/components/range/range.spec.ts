import {newSpecPage} from '@stencil/core/testing';

import {Range} from './range';

describe('range', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Range],
      html: '<bonjour-range></bonjour-range>'
    });

    expect(root).toEqualHtml(`<bonjour-range>
       <mock:shadow-root>
         <input max="5" min="1" steps="1" type="range" value="1" style="background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(0, var(--range-track-fill, #FB9196)), color-stop(0, var(--range-track-background, #F0F0ED)));">
       </mock:shadow-root>
     </bonjour-range>`);
  });


  it('apply property', async () => {
    const {root} = await newSpecPage({
      components: [Range],
      html: '<bonjour-range start="4"></bonjour-range>'
    });

    expect(root).toEqualHtml(`<bonjour-range start="4">
       <mock:shadow-root>
         <input max="5" min="1" steps="1" type="range" value="4" style="background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(0.75, var(--range-track-fill, #FB9196)), color-stop(0.75, var(--range-track-background, #F0F0ED)));">
       </mock:shadow-root>
     </bonjour-range>`);
  });
});
