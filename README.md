# Component Oriented SASS in React!

> Are you not sold on `CSS-in-JS` options? 
> Or feel it is overused?

**This project is for you!**

## Summary

This project demonstrates how **nested classes** in SCSS (Less, Stylus or something similar) can **help organize your presentation design.**

## How does this work?

Here's how to create _Parent Class Modifiers_ which extend the base Bootstrap Modal behavior:

#### There's 2 parts to this: HTML & (S)CSS.

> First, let's look at the example Modal HTML:

```html
<div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">...</div>
      <div class="modal-body">Modal body text goes here.</div>
      <div class="modal-footer">
        <button>A button</button>
      </div>
    </div>
  </div>
</div>
```

> Now, for the secret sauce... Some Sass:

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

### Important!

**Note:** Only 1 selector (`.modal-dialog`) is used to contain **all related permutations (or modifiers)** for any component.


