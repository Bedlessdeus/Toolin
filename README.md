# Toolin

Toolin is a versatile tool that allows users to create their own modules. It is designed to be user-friendly and flexible, enabling both simple and complex module creation.

## Creating Modules

### Easy Modules (.emod)

Easy Modules are designed for simplicity. When the script is loaded, an `input` and `output` are injected. To change the value, you only need to write into `output`. For example:

```javascript
output = input * 2;
```

This makes it easy to create basic modules without needing extensive programming knowledge. Here are a few more examples:

- **Square a Number:**
  ```javascript
  output = input * input;
  ```

- **Convert to String:**
  ```javascript
  output = input.toString();
  ```

If you're interested into what your code is resolved, the template is below!:
```javascript
    document.querySelector('form').oninput = (e) => {
        let input = document.querySelector('input[name="input"]').value;
        let output;
        {your_code}
        document.querySelector('input[name="output"]').value = output;
    };
```

A full translation is here:
- **Your Code in .emod**
```javascript
output = input * 2;
```

- **Website Code**
```html
<div>
    <h1>????</h1>
    <h2>????????</h2>
    <form>
        <div class="form-left">
            <label for="input"><b>Input</b></label>
            <input type="number" name="input" placeholder="Input">
        </div>
        <div class="form-right">
            <label for="output"><b>Output</b></label>
            <input type="text" name="output" placeholder="Output" disabled="">
        </div>
    </form>
</div>

<script class="loaded-script">document.querySelector('form').oninput = (e) => {
   let input = document.querySelector('input[name="input"]').value;
   let output;
   output = input * 2;
   document.querySelector('input[name="output"]').value = output;
};</script>
```

### Normal Modules (.mod)

<<<<<<< HEAD:README
Normal Modules allow you to have full control of what is rendered when a user clicks on your module. Any script within a <module-script> tag, will be translated and moved to a <script> at runtime! Here is an example:

- **Integer to Binary:**
  ```mod
  <module-script>
      document.querySelector('form').oninput = (e) => {
          let input = document.querySelector('input[name="input"]').value;
          let binary = (input >>> 0).toString(2);
          document.querySelector('input[name="output"]').value = binary;
      };
  </module-script>

  <div>
      <h1>Integer to Binary</h1>
      <h2>Convert an integer to binary</h2>
      <form>
          <div class="form-left">
              <label for="input"><b>Input</b></label>
              <input type="number" name="input" placeholder="Enter an integer" />
          </div>
          <div class="form-right">
              <label for="output"><b>Output</b></label>
              <input type="text" name="output" placeholder="Binary" disabled />
          </div>
      </form>
  </div>
  ```

By using Toolin, you can easily create and manage your own modules, whether they are simple or complex. Explore the existing modules to get a better understanding of how to create your own.
=======
Normal Modules offer more flexibility and control. They allow for more complex operations and interactions. You can reference existing `.mod` files to understand the structure and capabilities of these modules. Normal Modules can handle multiple inputs and outputs, and can perform a variety of tasks based on the user's requirements.
>>>>>>> 140686c344cf5316a53870c188917de7fc8a3503:README.md
