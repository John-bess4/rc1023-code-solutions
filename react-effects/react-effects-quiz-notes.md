# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is added to the DOM, that it is rendered for the first time
- What is a React Effect?
  a function that will perform side effects in a functional component, it's typically used for data fetching, subscriptions, manually changing the DOM
- When should you use an Effect and when should you not use an Effect?
  Use it when you need to perform side effects in response to component lifecycle events, and avoid using it for tasks that don't require a cleanup or don't depend on component lifecycle
- When do Effects run?
  effeccrts run after every render by default however you can control when they run by specifying dependencies or using other conditions
- What function is used to declare an Effect?
  useEffect function is usually used to declare an effect
- What are Effect dependencies and how do you declare them?
  they are variables that the effect depends on, they're specified as an array in the second arguement of useEffect
- Why would you want to clean up from an Effect?
  you may want to clean up from an effect to prevent memory leaks, unsubscribe from
  subscriptions or cancle ongoing operations when the component unmounts or dependencies change
- How do you clean up from an Effect?
  By returning a function from the effect
- When does the cleanup function run?
  Runs before the effect runs before or when the component is unmounted

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
