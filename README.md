![postig logo](./docs/images/title.png?raw=true)

Your one-stop shop for all your domestic package needs! With its sleek, minimalist design, Postiġ allows you to focus on efficiently processing your orders while not having to worry about the intricacies of the shipment process. It utilizes Stamps.com's Web Service API to generate a standard 4x6 shipping label which prints directly to a DYMO 4XL thermal printer. Postiġ also accepts input directly from a Stamps.com or Onyx 5lb. scale eliminating the need of inserting each value manually.

![main screen](./docs/images/main.png?raw=true)

# Getting Started
### Credential Requirements
In order to use Postiġ you must obtain staging credentials to access the Stamps.com API. You can obtain these credentials by registering for a [free developer account](http://developer.stamps.com/developer/). Once your request for access has been received, you will be given a unique `username`, `password`, and `IntegrationID`. The `username` and `password` will be used to log into Postiġ on launch, however, you will need to take your `IntegrationID` and assign it to the `id` variable inside `src/window.js` beforehand.

Once you have completed the above, clone this repository and install all dependencies via [`npm`](https://docs.npmjs.com/):
```
git clone https://github.com/qkcire/postig
cd postig
npm install
npm start
```

# Developer Notes
### Beware: bugs a-plenty!
Postiġ is no where near complete. There are plenty of features that I will continue to add over time (display account information, add postage funds, logging print history, etc.). With that said, its core functionalities such as obtaining user information and printing a physical label works without much flaw. That is if you have a DYMO 4XL directly connected and ready to go.

# License
[GPL 3.0](https://github.com/qkcire/postig/blob/master/LICENSE)
