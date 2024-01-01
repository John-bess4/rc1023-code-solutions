# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async is used to help define a fucntion that retruns a promise and await is used to put the excution of teh fucntion on hold until the promise is resolved
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await will give a more concise and readable syntax for working with promises while prmise.then and .catch work mor eso using a chain style of syntax
- When do you use `async`?
  whe defining a fucniton that has async operations and return a promise
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You should use await to pause the exectution for the promise, And you would want to avoid using await with synchronous fucntions as it can add unneeded work
- How do you handle errors with `await`?
  By wrapping await in a try/catch block to handle the errors
- What do `try`, `catch` and `throw` do? When do you use them?
  try to test the a code block, catch to handle errors and throw to create custom errors
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  end reuslt is the function not waiting for the response to resolve, which can lead to unexcpeted results
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await follow a synchronous style where as promse.then/.catch follows a chaining style,
  personally I like the async/await method as it makes it look more clean and is easier to go back and read the code

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
