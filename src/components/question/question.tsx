import {Component, h, Host, Method, Prop} from '@stencil/core';

/**
 * @slot question - A text for the question itself
 * @slot low - A definition of the lowest value of the range of answers. Commonly a text
 * @slot high - A definition of the highest value of the range of answers. Commonly a text
 */
@Component({
  tag: 'bonjour-question',
  styleUrl: 'question.scss',
  shadow: true
})
export class Question {
  /**
   * The minimal value
   */
  @Prop()
  min: number = 1;

  /**
   * The maximal value
   */
  @Prop()
  max: number = 5;

  /**
   * How many steps between the min and the max values
   */
  @Prop()
  steps: number = 1;

  /**
   * The default position of the range on load
   */
  @Prop()
  start: number = 1;

  private rangeRef!: HTMLBonjourRangeElement;

  /**
   * Get the current value of the range respectively the current answer
   */
  @Method()
  async getValue(): Promise<number> {
    let value: number = 1;

    if (this.rangeRef) {
      value = await this.rangeRef.getValue();
    }

    return value;
  }

  render() {
    return (
      <Host>
        <slot name="question"></slot>
        <div class="range">
          <bonjour-range min={this.min} max={this.max} steps={this.steps} start={this.start} ref={(el) => this.rangeRef = el as HTMLBonjourRangeElement}></bonjour-range>
          <slot name="low"></slot>
          <slot name="high"></slot>
        </div>
      </Host>
    );
  }
}
