# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How can `useEffect` be used to load data for a component?
  By defining a function with fetching logic inside `useEffect`. It runs on mount or when specified dependencies change
- What browser function can be used to make HTTP requests to a server in React?
  "fetch"
- How do you use `useEffect` to load component data just once when the component mounts?
  Pass an empty dependency array to "useEffect" for a one time data load on mount
- How do you use `useEffect` to load component data every time the data key changes?
  include the specific key in the dependency array of "useEffect"
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  data management libraries like react Query, vercel SWR will be some better alternatives

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
