# Image

An image bone can be used to represent a image or other types of media like a video or stream.

## Overview

To create an image bone add the `bone-type-image` class to a bone. The image size will be based off the skeleton size. Alternatively you can manually set the image size in your css.

```html
<div class='skeleton'>
  <div class='bone bone-type-image'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-image'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Styling

Thre are three different styles of image available.

- Square - default
- Rounded - `bone-style-rounded`
- Round - `bone-style-round`

Adding the `bone-style-rounded` or `bone-style-round` class will change the image bone style.



```html
<div class='skeleton'>
  <div class='bone bone-type-image'></div>
  <div class='bone bone-type-image bone-style-rounded'></div>
  <div class='bone bone-type-image bone-style-round'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-image'></div>
        <div class='bone bone-type-image bone-style-rounded'></div>
        <div class='bone bone-type-image bone-style-round'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
