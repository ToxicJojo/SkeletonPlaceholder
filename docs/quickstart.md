# Quickstart

## Create a Skeleton

A skeleton is the wrapper for your placeholder. To create one just add the `skeleton` class to a container.

```html
<div class='skeleton'>
<!-- The bones live in here -->
</div>
```

## Create a Bone

The skeleton above is currently empty. Let's create a bone to fill it.


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

The `bone-type-text` bone represents a single line of text. There are many different bone types. We can represent multiple lines of text by using the `bone-type-multiline` class.

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
