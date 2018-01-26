# BoneCss

A small CSS library to help you build skeleton placeholders. Allows you to keep using your existing layout and turn them into skeletons.



![](https://i.imgur.com/TMStB8X.png)

## Quick Start

To get started you can include the minified css file from the CDN

```html
<link href='bone.min.css'>
```

The first thing you want to do is create a skeleton wrapper. With some bones in it.

```html
<div class='skeleton'>
  <div class='bone bone-type-text'></div>
</div>
```

You can find the full documentation [here](https://toxicjojo.github.io/BoneCss/#/)

## Installation

### NPM

You can install the package from npm with

```
npm i -D {package-name}
```

### CDN

Use our CDN to get the minified css

```html
<link href='bone.min.css'>
```

## Demo

You can find a demo page with different use cases [here]().


## Contributing

Contributions are welcome.

To get started with development clone the repo and install dependencies.


```bash
git clone https://github.com/ToxicJojo/BoneCss
cd BoneCss
npm install
```

To start a development sever run 

```bash
npm run dev
```

To start the docs server

```bash
npm run docs
```

Both of them autoupdate the webpages on save.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
