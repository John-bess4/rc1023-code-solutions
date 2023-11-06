# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  fro debugigng purposes adn monitoring program flow and aplying information during development
- What is a "model"?
  often represents the structure of dtata of an application,such as an object or clss that defines it's characteristics
- Which "document" is being referred to in the phrase Document Object Model?
  refers to the webpage or html document
- What is the word "object" referring to in the phrase Document Object Model?
  refers to the representation of HTML elements as Javascript objects
- What is a DOM Tree?
  A heirarchal representation of the structure of an HMTL document, wiht the document iteslef at the root and elements as branches
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementByID() and document.querySelector()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getElementsByClassName()
- Why might you want to assign the return value of a DOM query to a variable?
  SO you can manitpute or access the element more efficiently and without repetitive queries
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir allows inspecting of the DOM properties
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  palcing the tag at the bottom so that the rest of the document can render before the scrips begin excuting
- What does `document.querySelector()` take as its argument and what does it return?
  takes a css selector as it's argument and returns the first matching element it finds
- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a css selctor as it;s arguement and returns a NodeList conatin all mathcing elements

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
