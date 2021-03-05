import {Component, h, Prop, Method, State} from '@stencil/core';

@Component({
  tag: 'bonjour-range',
  styleUrl: 'range.scss',
  shadow: true
})
export class Range {
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

  @State()
  private value: number = 1;

  private inputRef!: HTMLInputElement;

  componentWillLoad() {
    this.value = this.start < this.min ? this.min : this.start > this.max ? this.max : this.start;
  }

  async componentDidLoad() {
    await this.updateProgress();
  }

  private async updateProgress(): Promise<void> {
    if (!this.inputRef) {
      return;
    }

    this.value = parseInt(this.inputRef.value);

    const progression: number = (parseInt(this.inputRef.value) - parseInt(this.inputRef.min)) / (parseInt(this.inputRef.max) - parseInt(this.inputRef.min));

    this.inputRef.style.backgroundImage = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${progression}, var(--range-track-fill, #FB9196)), color-stop(${progression}, var(--range-track-background, #F0F0ED)))`;
  }

  /**
   * Get the current value of the range
   */
  @Method()
  async getValue(): Promise<number> {
    return this.value;
  }

  render() {
    // @ts-ignore
    // prettier-ignore
    return (<input type="range" min={this.min} max={this.max} steps={this.steps} value={this.value} onInput={() => this.updateProgress()} ref={(el) => this.inputRef = el as HTMLInputElement}/>);
  }
}
