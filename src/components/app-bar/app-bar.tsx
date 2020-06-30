import { Component, Prop, Watch, getAssetPath, h } from '@stencil/core';

export interface MenuItemInterface {
  name: string,
  link: string,
}

@Component({
  tag: 'app-bar',
  styleUrl: 'app-bar.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AppBar {
  /**
   * The first name
   */
  @Prop() name: string;

  /**
   * The middle name
   */
  @Prop() items: MenuItemInterface[];

  @Watch('items')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.items = JSON.parse(newValue);
  }

  render() {
    return(
      <div class='AppBar'>
        <div class='AppBar__menu'>
          <div class='AppBar__menu--icon'><img src={getAssetPath('assets/hamburger.svg')} /></div>
          <div class='AppBar__menu--items'>
            {this.items && this.items.map((item, key) => {
              return (<div key={key}>{item.name}</div>)
            })}
          </div>
        </div>
        <div class='AppBar__name'>{this.name}</div>

      </div>
    );
  }
}
