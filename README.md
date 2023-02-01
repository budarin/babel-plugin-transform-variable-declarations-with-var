# babel-plugin-transform-variable-declarations-with-var

> Transforms const and let variable declarations with var kind

## Install

Using npm:

```sh
npm install --save-dev babel-plugin-transform-variable-declarations-with-var
```

or using yarn:

```sh
yarn add babel-plugin-transform-variable-declarations-with-var --dev
```

## Usage

### With a configuration file (Recommended)

```js
return {
    plugins: [plu'babel-plugin-transform-variable-declarations-with-var'gin],
};
```

## Examples

**In**

```javascript
const a = 1;
const array = [1, 2, 3, a];

let b = 'a';
for (let i = 0; i < array.length; i++) {
    b = b + String(array[i]);
}
```

**Out**

```javascript
var a = 1;
var array = [1, 2, 3, a];

var b = 'a';
for (var i = 0; i < array.length; i++) {
    b = b + String(array[i]);
}
```
