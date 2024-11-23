import { Component, h } from '@stencil/core';

/** An icon component that uses google font icons.
 * Code snippet: <inv-icon>settings</inv-icon>
 * @slot - A name of the material icon. 
 */

@Component({
  tag: 'inv-icon',
  styleUrl: 'inv-icon.css',
  shadow: true,
})
export class InvIcon {
  render() {
    return (
      <span class="material-symbols-outlined">
        <slot></slot>
      </span>
    );
  }
}
