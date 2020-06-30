import { Component, Prop, Watch, h } from '@stencil/core';

export interface MenuItemInterface {
  name: string,
  link: string,
}

@Component({
  tag: 'web-list',
  styleUrl: 'web-list.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class WebList {
  /**
   * Header name
   */
  @Prop() name: string;

  /**
   * List of items to show
   */
  @Prop() items: MenuItemInterface[];

  @Watch('items')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.items = JSON.parse(newValue);
  }

  render() {
    return(
      <div class='WebList'>
        <div class='WebList__name'>{this.name}</div>
        <div class='WebList__list'>
          {this.items && this.items.map((item, key) => {
            return (<div key={key}>{item.name}</div>)
          })}
        </div>

      </div>
    );
  }
}
