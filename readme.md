## Answers to Questions

### 1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll

* **getElementById**
  Returns a **single element** with the specified `id`.
  Example:

  ```js
  const element = document.getElementById('myId');
  ```

* **getElementsByClassName**
  Returns a **live HTMLCollection** of elements with the specified `class name`.
  Example:

  ```js
  const elements = document.getElementsByClassName('myClass');
  ```

* **querySelector / querySelectorAll**

  * `querySelector` returns the **first element** that matches a CSS selector.
  * `querySelectorAll` returns a **NodeList of all elements** matching the selector.
    Example:

  ```js
  const firstElement = document.querySelector('.myClass');
  const allElements = document.querySelectorAll('.myClass');
  ```

---

### 2. How to create and insert a new element into the DOM

* **Create an element** using `document.createElement`.
* **Set its content or attributes**.
* **Append it** to the desired parent element.

Example:

```js
const newDiv = document.createElement('div');
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);
```

---

### 3. Event Bubbling and how it works

* Event Bubbling is the process where an event **propagates from the innermost element to outer elements**.
* Example: If a button inside a div is clicked, the click event first triggers on the button, then bubbles up to the div, then further up to the body.
* Default behavior for most events unless `stopPropagation()` is used.

---

### 4. Event Delegation in JavaScript and its usefulness

* Event Delegation is a technique where **a single event listener is attached to a parent element** instead of multiple child elements.
* It works by using the `event.target` property to determine which child triggered the event.
* **Usefulness:**

  * Reduces memory usage by attaching fewer listeners.
  * Useful for **dynamic elements** added after page load.

Example:

```js
document.getElementById('parent').addEventListener('click', function(event) {
  if(event.target && event.target.matches('button.childBtn')) {
    console.log('Child button clicked!');
  }
});
```

---

### 5. Difference between preventDefault() and stopPropagation()

* **preventDefault()**
  Stops the default browser behavior for an event.
  Example: Preventing a form from submitting.

  ```js
  event.preventDefault();
  ```

* **stopPropagation()**
  Stops the event from **bubbling up** to parent elements.
  Example: Preventing a click event on a button from triggering its parent’s click event.

  ```js
  event.stopPropagation();
  ```

