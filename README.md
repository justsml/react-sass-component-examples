# Component Oriented SASS in React!


> Are you not sold on `CSS-in-JS` options? 
> Or feel it is overused?

This project is for you.

We will explore how **nested classes** in SCSS (or similar) can **help organize your presentation design.**

Here's an example of how a Bootstrap modal could be modified:

```scss
.modal-dialog {
  &.dark-mode {
    .modal-content { background: #333; color: #fff; }
    .modal-header { text-align: center; }
    .modal-body { margin: 1.2rem; }
  }
  &.no-header {
    .modal-header { display: none; }
  }
  &.spaced-buttons {
    .modal-footer { justify-content: space-between; }
  }
  &.fluid-width {
    max-width: 80%;
  }
}

```

