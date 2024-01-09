# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  At the time of function creation
- What allows JavaScript functions to "remember" variables from their surroundings?
  closures allow for the functions to remember certain variable from their surrounding scope
- What values does a closure contain?
  function itself and the variable from it's outer scope
- When is a closure created?
  when a function is created inside another function allowing it to access the outer functions variables
- How can you tell if a function will be created with a closure?
  if a function is defined wihtin anothe function it will have access to the outer functions variable creating a closure
- In React, what is one important case where you need to know if a closure was created?
  with dealing event handlers and callbacks,and even more so when you need to capture the state or props from the surrounding component

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
