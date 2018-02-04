# From scratch

One way to build a placeholder UI is to built it from scratch. In most cases you would swap the placholder UI with the actual UI once data has been loaded. For this we will built a placeholder for a post in a cat company social network.

## Elements

Let's start by figuring out which elements we need for the placeholder. A post would show the profile picture of the cat that created the post. For this we can use an image bone.


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
