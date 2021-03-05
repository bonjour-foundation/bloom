import {newSpecPage} from '@stencil/core/testing';

import {Bloom} from './bloom';

describe('bloom', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Bloom],
      html: '<bonjour-bloom></bonjour-bloom>'
    });

    expect(root).toEqualHtml(`
      <bonjour-bloom>
       <mock:shadow-root>
         <div class="north petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 1;"></div>
         </div>
         <div class="north-east petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.9;"></div>
         </div>
         <div class="petal south-east">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.7;"></div>
         </div>
         <div class="petal south">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.5;"></div>
         </div>
         <div class="petal south-west">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.3;"></div>
         </div>
         <div class="north-west petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.2;"></div>
         </div>
         <div class="north placeholder">
           <slot name="north"></slot>
         </div>
         <div class="north-east placeholder">
           <slot name="north-east"></slot>
         </div>
         <div class="placeholder south-east">
           <slot name="south-east"></slot>
         </div>
         <div class="placeholder south">
           <slot name="south"></slot>
         </div>
         <div class="placeholder south-west">
           <slot name="south-west"></slot>
         </div>
         <div class="north-west placeholder">
           <slot name="north-west"></slot>
         </div>
         <div class="heart"></div>
       </mock:shadow-root>
      </bonjour-bloom>
    `);
  });

  it('apply properties', async () => {
    const {root} = await newSpecPage({
      components: [Bloom],
      html:
        '<bonjour-bloom ratio-north="1" ratio-north-east="0.9" ratio-south-east="0.8" ratio-south="0.7" ratio-south-west="0.6" ratio-north-west="0.5"></bonjour-bloom>'
    });

    expect(root).toEqualHtml(`
      <bonjour-bloom ratio-north="1" ratio-north-east="0.9" ratio-north-west="0.5" ratio-south="0.7" ratio-south-east="0.8" ratio-south-west="0.6">
       <mock:shadow-root>
         <div class="north petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 1;"></div>
         </div>
         <div class="north-east petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.9;"></div>
         </div>
         <div class="petal south-east">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.8;"></div>
         </div>
         <div class="petal south">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.7;"></div>
         </div>
         <div class="petal south-west">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.6;"></div>
         </div>
         <div class="north-west petal">
           <div class="background"></div>
           <div class="foreground" style="--bloom-ratio: 0.5;"></div>
         </div>
         <div class="north placeholder">
           <slot name="north"></slot>
         </div>
         <div class="north-east placeholder">
           <slot name="north-east"></slot>
         </div>
         <div class="placeholder south-east">
           <slot name="south-east"></slot>
         </div>
         <div class="placeholder south">
           <slot name="south"></slot>
         </div>
         <div class="placeholder south-west">
           <slot name="south-west"></slot>
         </div>
         <div class="north-west placeholder">
           <slot name="north-west"></slot>
         </div>
         <div class="heart"></div>
       </mock:shadow-root>
      </bonjour-bloom>
    `);
  });
});
