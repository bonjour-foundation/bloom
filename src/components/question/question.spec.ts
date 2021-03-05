import {newSpecPage} from '@stencil/core/testing';

import {Question} from './question';

describe('question', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Question],
      html: '<bonjour-question></bonjour-question>'
    });

    expect(root).toEqualHtml(`<bonjour-question>
      <mock:shadow-root>
        <slot name="question"></slot>
        <div class="range">
          <bonjour-range max="5" min="1" start="1" steps="1"></bonjour-range>
          <slot name="low"></slot>
          <slot name="high"></slot>
        </div>
      </mock:shadow-root>
    </bonjour-question>`);
  });

  it('apply property', async () => {
    const {root} = await newSpecPage({
      components: [Question],
      html: '<bonjour-question start="5"></bonjour-question>'
    });

    expect(root).toEqualHtml(`<bonjour-question start="5">
      <mock:shadow-root>
        <slot name="question"></slot>
        <div class="range">
          <bonjour-range max="5" min="1" start="5" steps="1"></bonjour-range>
          <slot name="low"></slot>
          <slot name="high"></slot>
        </div>
      </mock:shadow-root>
    </bonjour-question>`);
  });
});
