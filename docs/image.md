# Image

An image bone can be used to represent a image or other types of media like a video or stream.

## Overview

To create an image bone add the `bone-image` class to a bone. The image size will be based of the skeleton size. Alternatively you can manually set the image size in your css.

```html
<div class='skeleton'>
  <div class='bone bone-image'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-image'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Styling

Thre are three different styles of image avaiable.

- Square - default
- Rounded - `bone-rounded`
- Round - `bone-round`

Adding the `bone-rounded` or `bone-round` class will make change the image bone style.



```html
<div class='skeleton'>
  <div class='bone bone-image'></div>
  <div class='bone bone-image bone-rounded'></div>
  <div class='bone bone-image bone-round'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-image'></div>
        <div class='bone bone-image bone-rounded'></div>
        <div class='bone bone-image bone-round'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
