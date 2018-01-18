# Skeleton

Every placeholder needs to be placed inside a wrapper which is called skeleton. The placeholder elements are called bones. 

## Basic Skeleton

To create a skeleton simply add the `skeleton` class to a container.

```html
<div class='skeleton'>
</div>
```

!> All elements inside a skeleton that are not bones will be set to `visibility: hidden`. This keeps the original layout but will only render the bones of a skeleton. 

Removing `skeleton` from the container will remove all style added by the bones.

## Size

To change the sizes of the bones within a skeleton there are three different sizes for the skeleton. To change the size add one of these classes to the skeleton.

- `skeleton-small`
- `skeleton-normal` (this is the default size)
- `skeleton-big`

```html
<div class='skeleton skeleton-small'>
  <div class='bone bone-text bone-multiline'></div>
</div>

<div class='skeleton skeleton-normal'>
  <div class='bone bone-text bone-multiline'></div>
</div>

<div class='skeleton skeleton-big'>
  <div class='bone bone-text bone-multiline'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton skeleton-small'>
        <div class='bone bone-text bone-multiline'></div>
      </div>
      <br>
      <div class='skeleton skeleton-normal'>
        <div class='bone bone-text bone-multiline'></div>
      </div>
      <br>
      <div class='skeleton skeleton-big'>
        <div class='bone bone-text bone-multiline'></div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>
```

## Color

You can change the color of the bones within a skeleton. Add the `skeleton-{color}` class to the skeleton. The avaiable colors can be found [here](https://flatuicolors.com/). For example you could create a green skeleton using `skeleton-nephritis`.

```html
<div class='skeleton skeleton-nephritis'>
  <div class='bone bone-text bone-multiline'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton skeleton-nephritis'>
        <div class='bone bone-text bone-multiline'></div>
      <div>
    </div>
</template>

<script>
    export default {
    }
</script>
```


## Animation

The skeleton supports animation to indicate the loading of data. Add the class `skeleton-pulse` to create a pulsing skeleton.


```html
<div class='skeleton skeleton-pulse'>
  <div class='bone bone-text bone-multiline'></div>
</div>
```

```html
/*vue*/
<template>
    <div>
      <div class='skeleton skeleton-pulse'>
        <div class='bone bone-text bone-multiline'></div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>
```
