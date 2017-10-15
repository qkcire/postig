![postig logo](./docs/images/title.png?raw=true)

Your one-stop shop for all your domestic package needs. With its sleek and minimalist design, Postig allows you to focus on efficiently processing your orders while not having to worry about the intricacies of the shipment process. It utilizes Stamps.com's Web Service API to generate a standard 4x6 shipping label which prints directly to a DYMO 4XL thermal printer. Postig also accepts input directly from a Stamps.com or Onyx 5lb. scale.

![main screen](./docs/images/main.png?raw=true)

# Quick Start
### Credential Requirements
In order to use Postig you must obtain staging credentials to access the Stamps.com API. You can obtain these credentials by registering for a [free developer account](http://developer.stamps.com/developer/).

Once you have your API credentials, clone this repository and install all dependencies via [`npm`](https://docs.npmjs.com/):
```
git clone https://github.com/qkcire/postig
cd postig
npm install
npm start
```

# Developer Notes
Postig is no where near complete. There are plenty of features that I will continue to add over time (display account information, add postage funds, logging print history, etc.) however its main functionalities such as obtaining user information and printing physical labels works!

# License
[GPL 3.0](https://github.com/qkcire/postig/blob/master/LICENSE)
