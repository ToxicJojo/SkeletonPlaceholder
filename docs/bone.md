# Bone

A bone represents a single element in a skeleton placeholder. To create a bone add the class `bone` to an element.


!> The `bone` styles are only applied if they are placed within a `skeleton`. You can use this by removing the `skeleton` class from a container after loading your data.

## Types

Adding just the `bone` class won't display anything. You will need to add some type to the bone like `bone-text`. The types avaiable are:

- `bone-text` A single line of text [learn more](/text.md)
- `bone-multiline` Multiple lines of text [learn more](/multiline.md)
- `bone-heading` A heading [learn more](/heading.md)
- `bone-image` Images or other media content [learn more](/image.md)

```html
<div class='skeleton'>
  <div class='bone bone-text'></div>
  <div class='bone bone-text bone-multiline'></div>
  <div class='bone bone-text bone-heading'></div>
  <div class='bone bone-text bone-image'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text'></div>
        <br>
        <div class='bone bone-text bone-multiline bone-multiline-paragraph'></div>
        <br>
        <div class='bone bone-text bone-heading bone-has-subheading'></div>
        <br>
        <div class='bone bone-text bone-image'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
