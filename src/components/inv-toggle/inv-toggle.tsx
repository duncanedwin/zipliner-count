import { Component, Event, EventEmitter, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
/** Toggle buttons switch between two states, providing a clear way to manage features or settings within applications or websites. 
 * @slot icon - Used when the icon-only prop is set to true and can be used as a leading icon when a label is present.
 * @slot trailing-icon - Used when a trailing icon is to be displayed to the right of the label.
*/
@Component({
  tag: 'inv-toggle',
  styleUrl: 'inv-toggle.css',
  shadow: true,
})
export class InvToggle {
  /** Whether the toggle button is checked or not. */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  /** Used to style the toggle button as an icon button. The icon in the "icon" slot is displayed when this is set to true. */
  @Prop({ reflect: true }) iconOnly: boolean = false;
  /** Changes the appearance of the toggle button to a subtle one. */
  @Prop() subtle: boolean = false;
  /** Size of the toggle button. */
  @Prop({ reflect: true}) size: 'default' | 'xs' | 'sm' | 'lg' = 'default';
  /** Sets the toggle button a wider fixed width. NB: Does not apply when the size is set to 'xs'. */
  @Prop() fullWidth: boolean = false;
  /** Disables interaction. */
  @Prop({ reflect: true }) disabled: boolean = false;
  /** Label text for the toggle button. */
  @Prop() label: string;

  /** Tracks the state of the toggle */
  @State() isChecked: boolean = this.checked;

  /** Dispatched when the toggle is clicked. Emits the checked value */
  @Event({ eventName: 'click', composed: true, cancelable: true, bubbles: true }) clickCompleted: EventEmitter;

  @Watch('checked')
  handleStateChange(newValue: boolean) {
    this.isChecked = newValue;
    this.clickCompleted.emit(newValue);
  }

  @Listen('click')
  onClick() {
    this.isChecked = !this.isChecked;
  }
  
  render() {
    return (
      <Host class={{ 'subtle': this.subtle, 'full-width': this.fullWidth, 'disabled': this.disabled, 'is-checked': this.isChecked }}>
        <div class={{'border-layer': true, 'icon-only': this.iconOnly }}>
          <div class={{'main-container': true, 'icon-only': this.iconOnly }}>
            <div class={{'icon-container': true, 'icon-only': this.iconOnly }}>
              <slot slot="icon" name="icon" />
            </div>
            {(!this.iconOnly && this.label) && <div class="text-container">{this.label}</div>}
            {!this.iconOnly && <div class={{'trailing-icon-container': true, 'icon-only': this.iconOnly }}>
              <slot slot="trailing-icon" name="trailing-icon" />
            </div>} 
          </div>
        </div>
      </Host>
    );
  }
}
