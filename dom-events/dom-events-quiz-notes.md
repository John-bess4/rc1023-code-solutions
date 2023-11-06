# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging,monitoring, and dsiplaying information
- What is the purpose of events and event handling?
  used to repsond to a user interactions and other occurances in web applications
- Are all possible parameters required to use a JavaScript method or function?
  not all parameters are required, some may have default values
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  method used to set up a function for handling specific type of event
- What is a callback function?
  a fcuntion passed as an arguement to another function to be executed later
- What object is passed into an event listener callback when the event fires?
  the event object is passed into an event listener callback when the event fires
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  refers to the DOM element that triggered the event, to check it you can use the log method
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  the first one attaches the handleClick function as an event listener for the 'click' event.while the second immediately calles 'handleClick' when the 'click' event is atached

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
