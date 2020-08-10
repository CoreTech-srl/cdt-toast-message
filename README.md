# cdt-toast-message
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/chripto-coretech/cdt-toast-message)](https://github.com/CoreTech-srl/cdt-toast-message/releases/latest)
[![GitHub license](https://img.shields.io/github/license/CoreTech-srl/cdt-toast-message)](https://github.com/CoreTech-srl/cdt-toast-message/blob/master/LICENSE)

Customizable Toast Message in JavaScript

BASIC USAGE:
- Creating the Toast Message object
```html
<script type="text/javascript" src="cdt-toast-message.js"></script>
<div class="cdtToastMessage"></div>
```

- Configuring the Toast Message
```html
cdtTMConf({
    'horizontalPos': 'center',
    'horizontal':'0px'
});
```

- Showing the Toast Message
```html
cdtToastMessage('This is a toast message');
```
