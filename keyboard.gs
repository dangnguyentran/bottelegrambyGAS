let MENU = {
  "keyboard": [
    [{ "text": "/coinsprice" }, { "text": "/help" }],
    [{ "text": "/btc" }, { "text": "/billfoods" }],
    [{ "text": "/tonghopBot" }, { "text": "/tradingview" }],
    [{ "text": "/traderUS" }, { "text": "/traderVN1" }],
    [{ "text": "/traderRU" }, { "text": "/traderVN2" }],
    [{ "text": "/traderFXVN1" }, { "text": "/tienichmoi" }],
    [{ "text": "/tintuccrypto5phut" }, { "text": "/Ryan95-MEMETop1" }],
    [{ "text": "/maytinh" }, { "text": "/maytinh1" }],
    [{ "text": "/coinprice1" }, { "text": "/crypto" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
  "input_field_placeholder": "Văn bản gợi ý"
};
let MENUCRYPTO = {
  "keyboard": [    
    [{ "text": "/Giá BTC", "url": "https://g.co/finance/BTC-VND"}, { "text": "/Giá BNB", "url": "https://g.co/finance/BNB-VND" }],
    [{ "text": "/Giá ETH", "url": "https://g.co/finance/ETH-VND" }, { "text": "coinsprice", MENU }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
  "input_field_placeholder": "Văn bản gợi ý"
};
let MAYTINH = {
  "keyboard": [
    [{ "text": "CỘNG" }, { "text": "TRỪ" }],
    [{ "text": "NHÂN" }, { "text": "CHIA" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
  "input_field_placeholder": "Văn bản gợi ý"
};

let CUSTOM_KEYBOARD = {
  "keyboard": [
    [{ "text": "Cái nút 1" }, { "text": "Cái nút 2" }]
  ]
};

let CUSTOM_KEYBOARD2 = {
  "keyboard": [
    [{ "text": "Cái nút 1" }, { "text": "Cái nút 2" }]
  ],
  "resize_keyboard": true
};

let CUSTOM_KEYBOARD3 = {
  "keyboard": [
    [{ "text": "Cái nút 1" }, { "text": "Cái nút 2" }],
    [{ "text": "Cái nút 3" }, { "text": "Cái nút 4" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};


let CUSTOM_KEYBOARD5 = {
  "keyboard": [
    [{ "text": "Cái nút 1 ❤️" }, { "text": "Cái nút 2 ✨" }],
    [{ "text": "Cái nút 3 🆗" }, { "text": "Cái nút 4 🔥" }, { "text": "Cái nút 5 ✔️" }],
    [{ "text": "Cái nút 6 ❤️‍🔥" }, { "text": "Cái nút 7 🏁" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
};

let REMOVE_KEYBOARD = {
  remove_keyboard: true
};

let PHONE_No = {
  "keyboard": [
    [{ "text": "Gửi số ☎️️", 'request_contact': true }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let LOCATION_KEYBOARD = {
  "keyboard": [
    [{ "text": "Gửi vị trí 🗺️️", 'request_location': true }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD = {
  "keyboard": [
    [{ "text": "Sự khảo sát", 'request_poll': {} }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD2 = {
  "keyboard": [
    [{ "text": "Sự khảo sát", 'request_poll': { type: "quiz" } }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let PRICECRYPTO = {
  "keyboard": [
    [{ "text": "Sự khảo sát", 'request_poll': { type: "quiz" } }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD3 = {
  "keyboard": [
    [{ "text": "Sự khảo sát", 'request_poll': { type: "regular" } }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let INLINE = {
  "inline_keyboard": [
    [{ "text": "Giá Crypto", 'callback_data': "Cái nút 123" }, { "text": "Cái nút 2", 'callback_data': "Cái nút 2" }],
    [{ "text": "Cái nút 3", 'callback_data': "Cái nút 3" }, { "text": "Cái nút 4", 'callback_data': "Cái nút 4" }, { "text": "Cái nút 5", 'callback_data': "Cái nút 5" }],
    [{ "text": "Cái nút 6", 'callback_data': "Cái nút 6" }, { "text": "Cái nút 7", 'callback_data': "Cái nút 7" }]
  ]
};

let INLINECRYPTO = {
  "inline_keyboard": [
    [{ "text": "Giá BTC", 'callback_data': "/btc" }, { "text": "Giá ETH", 'callback_data': "/eth" }],
    [{ "text": "Giá BNB", 'callback_data': "/bnb" }, { "text": "Cái nút 4", 'callback_data': "Cái nút 4" }, { "text": "Cái nút 5", 'callback_data': "Cái nút 5" }],
    [{ "text": "Cái nút 6", 'callback_data': "Cái nút 6" }, { "text": "Cái nút 7", 'callback_data': "Cái nút 7" }]
  ]
};

let URL_KEYBOARD = {
  "inline_keyboard": [
    [{ "text": "Kiểm tra thư", 'url': "mail.ru" }]
  ]
};

let SWITCH_INLINE = {
  "inline_keyboard": [
    [{ "text": "Cái nút 1", 'switch_inline_query_current_chat': 'Văn bản của tôi' }, { "text": "Cái nút 2", 'callback_data': "Cái nút 2" }]
  ]
};

let FORCE_REPLY = {
  "force_reply": true,
  "input_field_placeholder": "Văn bản của bạn"
};

