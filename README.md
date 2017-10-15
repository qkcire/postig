![postig logo](./docs/images/title.png?raw=true)

<p align="center">
The Minimalist's shipping platform.
</p>

***

**Postiġ** allows you to focus on processing your orders while not having to worry about the many intricacies of the shipment process. It utilizes the Stamps.com Web Service API to generate a standard 4x6 shipping label which you can then print using a DYMO 4XL thermal printer. Postiġ also accepts input directly from a Stamps.com 5lb. scale - eliminating the need of manually inserting the weight of your package.

![main screen](./docs/images/main.png?raw=true)

# Getting Started
### Credential Requirements
In order to use Postiġ you must obtain staging credentials to access Stamps.com's API. You can obtain these credentials by registering for a [free developer account](http://developer.stamps.com/developer/). Once your request for access has been processed, you will be given a unique `username`, `password`, and `IntegrationID`. The `username` and `password` will be used to log into Postiġ on launch, however, you will need to take your `IntegrationID` and assign it to the `id` inside `src/window.js` beforehand.

Once you have completed the above, clone this repository and install all dependencies via [`npm`](https://docs.npmjs.com/):
```
git clone https://github.com/qkcire/postig
cd postig
npm install
npm start
```

# Developer Notes
### Beware: bugs a-plenty!
Postiġ is no where near complete. The purpose of this project was to try my hand out at building an entire application from scratch using the Stamps.com platform while also incorporating two of the main USB devices used in the process: a printer and a scale. There are plenty of wrinkles to be ironed out as well as features that I will continue to add/fix over time (display account information, add postage funds, logging print history, etc.). With that said, its core functionalities such as obtaining user information and printing a physical label *should* work.

# License
[GPL 3.0](https://github.com/qkcire/postig/blob/master/LICENSE)
