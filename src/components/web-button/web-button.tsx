import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class WebButton {
  /**
   * Header name
   */
  @Prop() name: string;

  render() {
    return(
      <div class='WebButton'>{this.name}</div>
    );
  }
}
