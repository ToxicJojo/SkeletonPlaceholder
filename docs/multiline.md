# Multiline Text

The multiline bone serves as a placeholder for text content that is longer than a single line.

## Overview

The multiline bones are an extension of the text bone. To create a multiline bone add the `bone-multiline` class to a text bone.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-multiline'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-multiline'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

Every multiline bone has three lines of 'text'. They inherit their color and size from the skeleton. 
There are different styles of multiline bones avaiable depending on the content you want to display.

## Paragraph

To represent text that is a paragraph add the class `bone-multiline-paragraph`.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-multiline bone-multiline-paragraph'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-multiline bone-multiline-paragraph'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Steps


```html
<div class='skeleton'>
  <div class='bone bone-text bone-multiline bone-multiline-steps'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-multiline bone-multiline-steps'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Mixed

To represent text with mixed line sizes add the `bone-multiline-mixed` class.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-multiline bone-multiline-mixed'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-multiline bone-multiline-mixed'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## List

To represent a list add the `bone-multiline-list` class.

```html
<div class='skeleton'>
  <div class='bone bone-text bone-multiline bone-multiline-list'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-text bone-multiline bone-multiline-list'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

