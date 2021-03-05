import {Component, h, Host, Prop} from '@stencil/core';

/**
 * @slot north - Commonly a text, displayed at north position of the flower
 * @slot north-east - Commonly a text, displayed at north-east position of the flower
 * @slot south-east - Commonly a text, displayed at south-east position of the flower
 * @slot south - Commonly a text, displayed at south position of the flower
 * @slot south-west - Commonly a text, displayed at south-west position of the flower
 * @slot north-west - Commonly a text, displayed at north-west position of the flower
 */
@Component({
  tag: 'bonjour-bloom',
  styleUrl: 'bloom.scss',
  shadow: true
})
export class Bloom {
  /**
   * The fill property of the north petal of the flower
   */
  @Prop()
  ratioNorth: number = 1;

  /**
   * The fill property of the north-east petal of the flower
   */
  @Prop()
  ratioNorthEast: number = 0.9;

  /**
   * The fill property of the south-east petal of the flower
   */
  @Prop()
  ratioSouthEast: number = 0.7;

  /**
   * The fill property of the south petal of the flower
   */
  @Prop()
  ratioSouth: number = 0.5;

  /**
   * The fill property of the south-west petal of the flower
   */
  @Prop()
  ratioSouthWest: number = 0.3;

  /**
   * The fill property of the north-west petal of the flower
   */
  @Prop()
  ratioNorthWest: number = 0.2;

  render() {
    return (
      <Host>
        {this.renderPetal('north', this.ratioNorth)}
        {this.renderPetal('north-east', this.ratioNorthEast)}
        {this.renderPetal('south-east', this.ratioSouthEast)}
        {this.renderPetal('south', this.ratioSouth)}
        {this.renderPetal('south-west', this.ratioSouthWest)}
        {this.renderPetal('north-west', this.ratioNorthWest)}

        {this.renderPlaceHolder('north')}
        {this.renderPlaceHolder('north-east')}
        {this.renderPlaceHolder('south-east')}
        {this.renderPlaceHolder('south')}
        {this.renderPlaceHolder('south-west')}
        {this.renderPlaceHolder('north-west')}

        <div class="heart"></div>
      </Host>
    );
  }

  private renderPetal(cardinal: string, ratio: number) {
    return (
      <div class={`petal ${cardinal}`}>
        <div class="background"></div>
        <div
          class="foreground"
          style={{
            '--bloom-ratio': `${ratio}`
          }}></div>
      </div>
    );
  }

  private renderPlaceHolder(cardinal: string) {
    return (
      <div class={`placeholder ${cardinal}`}>
        <slot name={cardinal}></slot>
      </div>
    );
  }
}
