# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  tehy are operators that return the right operand based on the truthiness or falsiness of the left operand and they can be used to check if a statement is true or false
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  occurs when the right operand is not evaluated because the left operand is sufficient to determine the results
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? reuturns the right operand if the left operand is a null or undefined distrinct from || as it specifcally only handles nullush values
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ternary operator is a concise form of an if/else statment used for conditional expressions,providing a more compact syntax
- What is the `?.` (optional chaining) operator? When would you use it?
  allows fro safe navigation and accessing properties deep within nested objects,skipping evaluation uf any intermediate property is null or undefined
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread syntax is used to expand elements in arrays and properties in object facilitating concise data manipulation and construction
- What data types can be spread into an array? Into an object?
  Iterable data types, arrays, strings, etc,, objects can spread iterable data types as well but it has to be a key-value pair
- How does spread syntax differ from rest syntax?
  spread syntax is for expanding elemetns while rest syntax is for collecting remaining elemetns into a single variable

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
