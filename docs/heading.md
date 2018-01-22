# Heading

A heading bone can be used to represent some sort of heading in your content.

## Overview

To create a heading bone add the class `bone-type-heading` to a bone. A heading is bigger than normal text.

```html
<div class='skeleton'>
  <div class='bone bone-type-heading'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-heading'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Subheading

You can add a subheading to the heading bone. Simply add the class `bone-style-subheading`. The subheading will be shown below the heading and has the normal text size. The subheading is half the width of the heading.

```html
<div class='skeleton'>
  <div class='bone bone-type-heading bone-style-subheading'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-heading bone-style-subheading'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
