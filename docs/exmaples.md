# Examples

These are a few examples of what you could do with skeleton placeholders.

## Facebook

```html
/*vue*/
<template>
<div class='post skeleton skeleton-size-small'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-type-image'>
    <div class='post-info bone bone-type-heading bone-style-subheading width-quarter'>
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
  <p class='bone bone-type-multiline bone-style-mixed'>
  </p>
</div>
</template>

<script>
    export default {
    }
</script>
```


```html
<div class='post skeleton skeleton-size-small'>
  <div class='header'>
    <img src='profile-pic.png' class='avatar bone bone-type-image'>
    <div class='post-info bone bone-type-heading bone-style-subheading width-quarter'>
      <div>
        <span>
          {{name}}
        </span>
        <span class='subtext'>
          {{shared a post 45min ago}}
        </span>
      </div>
      <span class='subheader'>
        {{job-title}} at <a href='#/existing'>{{company}}</a>
      </span>
    </div>
  </div>
  <p class='bone bone-type-multiline bone-style-paragraph'>
  </p>
</div>
```

```css
.post {
  padding: 20px;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.12), 0 1px 6px 0 rgba(0,0,0,0.12);
  background-color: white;
}

.header {
  display: flex;
  margin-bottom: 20px;
}

.post-info {
  display: flex;
  flex-direction: column;
}

.subheader {
  font-size: 12px;
  opacity: .9;
  margin-top: 2px;
}

.subtext {
  font-size: 9px;
}

img.avatar {
  height: 48px;
  width: 48px;
  margin-right: 20px;
  border-radius: 50%;
}
```


## Twitch

```html
/*vue*/
<template>
<div class='stream skeleton'>
  <img class='player bone bone-type-image'>
  <div class='stream-info'>
    <img class='profile-pic bone bone-type-image'>
    <div class='bone bone-type-heading bone-style-subheading width-half'>
    </div>
  </div>
</div>
</template>

<script>
    export default {
    }
</script>
```


```html
<div class='stream skeleton'>
  <img class='player bone bone-type-image'>
  <div class='stream-info'>
    <img class='profile-pic bone bone-type-image'>
    <div class='bone bone-type-heading bone-style-subheading width-half'>
    </div>
  </div>
</div>
```

```css
.stream {
  padding: 20px;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.12), 0 1px 6px 0 rgba(0,0,0,0.12);
  background-color: white;
}

.stream-info {
  display: flex;
  margin-top: 10px;
}

.stream .bone.player {
  width: 100%;
  height: 250px;
}

img.profile-pic {
  margin-right: 20px;
}
```

