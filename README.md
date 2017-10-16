![postig logo](./docs/images/title.png?raw=true)

<p align="center">
The Minimalist's shipping platform.
</p>

***

**Postiġ** is a desktop app built to eliminate the burdens and intricacies of the shipment process, allowing you to focus on what's really important: processing your orders in the most efficient manner possible. Postiġ utilizes the Stamps.com Web Service API to generate a standard 4x6 shipping label which is printed using a DYMO 4XL thermal printer. Postiġ also accepts input directly from a Stamps.com 5lb. scale - removing the need of manually inserting the weight of your package.


![main screen](./docs/images/main.png?raw=true)

# Getting Started
### SDC API Access
In order to use Postiġ you must obtain staging credentials from Stamps.com. You can obtain these credentials by registering for a [free developer account](http://developer.stamps.com/developer/). Once your request for access has been processed, you will be given a unique `username`, `password`, and `IntegrationID`. The `username` and `password` will be used to log into Postiġ on launch, however, you will need to take your `IntegrationID` and assign it to the `id` inside `src/window.js` beforehand.

### Quick Start
Once you have completed the steps above, clone this repository and install all dependencies via [`npm`](https://docs.npmjs.com/):
```
git clone https://github.com/qkcire/postig
cd postig
npm install
npm start
```

# Developer's Note
The purpose of Postiġ was to try my hand at building an entire application from scratch using the Stamps.com API. This also came with the intent of incorporating two of the most common USB devices found in the shipping workflow: a thermal printer and a scale. Both goals were achieved, however, this project is no where near "complete". There are plenty of wrinkles to be ironed out as well as features that I would like to add/fix over time (display account information, add postage funds, logging print history, etc.), but for the most part I would to like to keep it slim and slender. Lastly, plans to incorporate modern techniques such Machine Learning algorithms to determine and optimize certain user input/output patterns are in the works so stay tuned!

# License
[GPL 3.0](https://github.com/qkcire/postig/blob/master/LICENSE)
