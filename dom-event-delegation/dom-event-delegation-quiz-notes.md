# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It's the DOM element that triggered the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Due to Event Bubbling
- What DOM element property tells you what type of element it is?
  element.tagName will tell the type
- What does the `element.closest()` method take as its argument and what does it return?
  uses a CSS selector as the arguement and returns the closest ancestor of the current element that matches the selector used as a arguement
- How can you remove an element from the DOM?
  by using element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By using event delegation and adding a signle listener to a common ancestor, check 'event.target' to determine which specfici element triggered the event

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
