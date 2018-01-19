# From existing UI

BoneCss was built to allow you to easily transform your existing UI to a placholder without having to recreate the layout. This saves you time and means any layout changes you make in the UI will also be reflected in the placholder. Once your data loads you can update the content and remove the `skeleton` class from the layout to show the content.

## Starting point

In this example we will work with a layout for a post in a cat social network. The layout looks as follows.



```html
<div class='post'>
<div class='post'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar'>
    <div class='post-info'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
  </p>
</div>
</div>
```

```html
/*vue*/
<template>
<div class='post'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar'>
    <div class='post-info'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```


## Identify placholder elements

We want to identify the elements we want to become placeholders.

- The image
- The post info
- The actual text of the post

The image and text are pretty straightforward. We want to use the `img` element and the `p` element for those two. 
For the post info we will make the `div.post-info` a bone because it contains the whole post info. We will see later that the nested elements won't be a problem.


## Create the skeleton

Let's start creating the skeleton. We can simply add the `skeleton` class to the post.


```html
<div class='post skeleton'>
  <!-- Noting changed here -->
</div>
```

```html
/*vue*/
<template>
<div class='post skeleton'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar'>
    <div class='post-info'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```

As you can see the whole content disappeared. This is because the skeleton sets `visibility: hidden` for all it's children that are not bones. This way the layout is preserved and we don't need to remove unwanted children.

## Adding the bones

Next we want to add the bones we need. First we want to create the bone for the image. Add the `bone` and `bone-image` classes to the `img` element.


```html
/*vue*/
<template>
<div class='post skeleton'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-image'>
    <div class='post-info'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```

To represent the post info we can use the heading bone. Add `bone`, `bone-text`, `bone-heading` and `bone-has-subheading` to the `div`

```html
/*vue*/
<template>
<div class='post skeleton'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-image'>
    <div class='post-info bone bone-text bone-heading bone-has-subheading'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```


You can create the text bone by adding the `bone` `bone-text` and `bone-multiline` classes to the `p`. If you want the text bone to look like a paragraph add `bone-multiline-paragraph`.

```html
/*vue*/
<template>
<div class='post skeleton'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-image'>
    <div class='post-info bone bone-text bone-heading bone-has-subheading'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p class='bone bone-text bone-multiline bone-multiline-paragraph'>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```


## Finishing touches

Currently the heading bone takes up all the space it can get. This does't really reflect our acutal layout. To make it smaller we can add the `width-quarter` class.

```html
/*vue*/
<template>
<div class='post skeleton'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-image'>
    <div class='post-info bone bone-text bone-heading bone-has-subheading width-quarter'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p class='bone bone-text bone-multiline bone-multiline-paragraph'>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```

To show that the content is loading we can add a loading animation. Add the class `skeleton-pulse` to the `skeleton` to show a pulsing loading animation.

```html
/*vue*/
<template>
<div class='post skeleton skeleton-pulse'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-image'>
    <div class='post-info bone bone-text bone-heading bone-has-subheading width-quarter'>
      <div>
        <span>
          Lily
        </span>
        <span class='subtext'>
          shared a post 45min ago
        </span>
      </div>
      <span class='subheader'>
        CEO at <a href='#/existing'>Pawful</a>
      </span>
    </div>
  </div>
  <p class='bone bone-text bone-multiline bone-multiline-paragraph'>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```
