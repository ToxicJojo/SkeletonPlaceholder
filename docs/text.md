# Text

Text bones can be used to represent text content.

## Overview

To create a text bone add the class `bone-type-text` to a bone. The text bone represents a single line of text. If you need to represent multiple lines of text take a look at [multiline text](/multiline).

```html
<div class='skeleton'>
  <div class='bone bone-type-text'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-text'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Styling

By default the text bone is square. If you want a rounded bone instead add the class `bone-style-rounded` to the text bone.

```html
<div class='skeleton'>
  <div class='bone bone-type-text bone-style-rounded'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-text bone-style-rounded'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
