# trumpeter

only one javascript library for trumpeter

[![CircleCI](https://circleci.com/gh/sizer/trumpeter.svg?style=svg)](https://circleci.com/gh/sizer/trumpeter)

## Install

### npm

```
npm install --save trumpeter
```

### Yarn

```
yarn add trumpeter
```

## Usage

### Node.js

```js
const trumpeter = require("trumpeter");

trumpeter.fingering("C")
# => [false, false, false]
```

### ES2018

```js
import { fingering } = require("trumpeter");

fingering("C")
# => [false, false, false]
```