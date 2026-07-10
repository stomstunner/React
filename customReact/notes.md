# Custom React Renderer Notes

## Purpose

The purpose of this code is to understand how React renders elements internally. We are not creating React itself. Instead, we are manually performing the same basic steps that React performs behind the scenes.

---

# Step 1: Create the Renderer Function

```javascript
function customRender(reactElement, container) {
```

### Explanation

We create a function called `customRender()`. This function acts like React's render function. It receives two things: a React-like object and the HTML container where the element should be displayed.

The main purpose of this function is to read the object, create the required HTML element, and insert it into the webpage.

---

# Step 2: Create the HTML Element

```javascript
const domElement = document.createElement(reactElement.type);
```

### Explanation

The `type` property tells us which HTML tag should be created. If the type is `"a"`, JavaScript creates an `<a>` element.

At this point, the element exists only in memory. It has not been displayed on the webpage yet.

---

# Step 3: Add the Text

```javascript
domElement.innerHTML = reactElement.children;
```

### Explanation

The `children` property contains the text that should appear inside the HTML element.

This line inserts that text into the newly created element.

---

# Step 4: Add the href Attribute

```javascript
domElement.setAttribute("href", reactElement.props.href);
```

### Explanation

The `props` object stores HTML attributes. Here, the value of `href` is taken from the object and assigned to the anchor element.

This makes the link point to the correct website.

---

# Step 5: Add the target Attribute

```javascript
domElement.setAttribute("target", reactElement.props.target);
```

### Explanation

This line adds the `target="_blank"` attribute.

As a result, clicking the link opens it in a new browser tab instead of replacing the current page.

---

# Step 6: Insert the Element into the Page

```javascript
container.appendChild(domElement);
```

### Explanation

Until now, the element existed only in memory.

`appendChild()` inserts the element into the selected container (`#root`), making it visible on the webpage.

---

# Step 7: Create the React Object

```javascript
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
```

### Explanation

This object represents a simplified version of a React Element.

Instead of writing JSX, we manually describe the HTML element using a JavaScript object. React internally creates similar objects before rendering.

---

# Step 8: Select the Root Container

```javascript
const mainContainer = document.querySelector("#root");
```

### Explanation

This line selects the `<div id="root">` element from the HTML document.

React needs a starting point where it can place the generated UI.

---

# Step 9: Start the Rendering Process

```javascript
customRender(reactElement, mainContainer);
```

### Explanation

The function is finally called.

It reads the object, creates the DOM element, applies attributes and text, and inserts the final element into the webpage.

---

# Complete Flow

```text
JavaScript Object
        ↓
Read the Object
        ↓
Create HTML Element
        ↓
Add Text
        ↓
Add Attributes
        ↓
Append to #root
        ↓
Browser Displays the UI
```

---

# Key Points

- React first converts JSX into a JavaScript object.
- The object contains the element type, attributes, and content.
- React reads this object and creates a real DOM element.
- Finally, the DOM element is inserted into the webpage.
