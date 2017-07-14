# vakil-telegram
tiny telegram client in functional way inspired by Anjana Vakil

if you wanna see what Im talking about: https://youtu.be/Pg3UeB-5FdA?t=24m40s

```js
var token = 'your-telegram-token';
var Telegram = require('vakil-telegram');
var telegram = Telegram(token);

telegram('sendMessage', {chat_id: 'some chat id', text: 'Cool functional'});
```

How to send an image
```js
telegram('sendPhoto', {chat_id: '-246972423', photo: fs.createReadStream('upload.jpg')});
```

Full docs at
https://core.telegram.org/bots/api
