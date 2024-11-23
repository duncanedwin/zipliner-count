# inv-toggle



<!-- Auto Generated Below -->


## Overview

Toggle buttons switch between two states, providing a clear way to manage features or settings within applications or websites.

## Properties

| Property    | Attribute    | Description                                                                                                           | Type                                | Default     |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `checked`   | `checked`    | Whether the toggle button is checked or not.                                                                          | `boolean`                           | `false`     |
| `disabled`  | `disabled`   | Disables interaction.                                                                                                 | `boolean`                           | `false`     |
| `fullWidth` | `full-width` | Sets the toggle button a wider fixed width. NB: Does not apply when the size is set to 'xs'.                          | `boolean`                           | `false`     |
| `iconOnly`  | `icon-only`  | Used to style the toggle button as an icon button. The icon in the "icon" slot is displayed when this is set to true. | `boolean`                           | `false`     |
| `label`     | `label`      | Label text for the toggle button.                                                                                     | `string`                            | `undefined` |
| `size`      | `size`       | Size of the toggle button.                                                                                            | `"default" \| "lg" \| "sm" \| "xs"` | `'default'` |
| `subtle`    | `subtle`     | Changes the appearance of the toggle button to a subtle one.                                                          | `boolean`                           | `false`     |


## Slots

| Slot              | Description                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `"icon"`          | Used when the icon-only prop is set to true and can be used as a leading icon when a label is present. |
| `"trailing-icon"` | Used when a trailing icon is to be displayed to the right of the label.                                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
