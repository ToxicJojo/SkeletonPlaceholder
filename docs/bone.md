# Bone

A bone represents a single element in a skeleton placeholder. To create a bone add the class `bone` to an element.


!> The `bone` styles are only applied if they are placed within a `skeleton`. You can use this by removing the `skeleton` class from a container after loading your data.

## Types

Adding just the `bone` class won't display anything. You will need to add some type to the bone like `bone-type-text`. The types available are:

- `bone-type-text` A single line of text [learn more](/text.md)
- `bone-type-multiline` Multiple lines of text [learn more](/multiline.md)
- `bone-type-heading` A heading [learn more](/heading.md)
- `bone-type-image` Images or other media content [learn more](/image.md)

```html
<div class='skeleton'>
  <div class='bone bone-type-text'></div>
  <div class='bone bone-type-multiline'></div>
  <div class='bone bone-type-heading'></div>
  <div class='bone bone-type-image'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-text'></div>
        <br>
        <div class='bone bone-type-multiline bone-style-paragraph'></div>
        <br>
        <div class='bone bone-type-heading bone-style-subheading'></div>
        <br>
        <div class='bone bone-type-image'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
