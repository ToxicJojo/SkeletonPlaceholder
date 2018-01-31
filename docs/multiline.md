# Multiline Text

The multiline bone serves as a placeholder for text content that is longer than a single line.

## Overview

To create a multiline bone add the `bone-type-multiline` class to a bone.

```html
<div class='skeleton'>
  <div class='bone bone-type-multiline'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline'></div>
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

To represent text that is a paragraph add the class `bone-style-paragraph`.

```html
<div class='skeleton'>
  <div class='bone bone-type-multiline bone-style-paragraph'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline bone-style-paragraph'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Steps

To represent text that gets shorter with each line add the `bone-style-steps` class.

```html
<div class='skeleton'>
  <div class='bone bone-type-multiline bone-style-steps'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline bone-style-steps'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Mixed

To represent text with mixed line sizes add the `bone-style-mixed` class.

```html
<div class='skeleton'>
  <div class='bone bone-type-multiline bone-style-mixed'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline bone-style-mixed'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## List

To represent a list add the `bone-style-list` class.

```html
<div class='skeleton'>
  <div class='bone bone-type-multiline bone-style-list'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline bone-style-list'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Styling
By default the multiline bone is square. If you want a rounded bone instead add the class `bone-style-rounded` to the multiline bone.


```html
<div class='skeleton'>
  <div class='bone bone-type-multiline bone-style-rounded'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton'>
        <div class='bone bone-type-multiline bone-style-rounded'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
