## Easysize Front end test task

Front-end task for Easysize company:

### Instructions

- Uncomment widget code in `script.js` from original project ;

```js
let configuration = {
  attributes: ["red", "blue", "black"],
  placeholder: ".product-color",
  placeholder_text: "Surprise me with the color",
  cart_button: ".cart-btn",
  image: window.location.origin + "/images/black.png",
  select_attribute: function (attr) {},
};

let widget = Widget(configuration);
setTimeout(widget.start, 2000);
```

- execute:
   - npm install
   - npm run build 
   - npm run serve
- The library will be served at `http://172.0.0.1:3355/demo.js` as requested
- An widget button appears after a few seconds with the colors mixed

  ![Screenshot](gitButton.jpg)

- When clicks the button a modal show up

  ![Screenshot](gitModal.jpg)

- After click the button surprise me, the color was choose randomly to user select

  ![Screenshot](gitModal2.jpg)
