# Heading

A heading bone can be used to represent some sort of heading in your content.

## Overview

The heading bone is an extension of the text bone. To create a heading bone add the class `bone-heading` to a text bone. A heading is bigger than the normal text.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-heading'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-heading'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Subheading

You can add a subheading to the heading bone. Simply add the class `bone-has-subheading`. The subheading will be shown below the heading and has the normal text size. The subheading is half the width of the heading.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-heading bone-has-subheading'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-heading bone-has-subheading'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
