//https://github.com/andreintys/lessons/blob/main/Lesson%202%20Telegram%20bot%20commands%20from%20Google%20Sheets
/*
const token = "6310745258:AAGVJqYNsFqEk4vlt0R09FVXfgbUWYE3qn0";
const webAppUrl = "https://script.google.com/macros/s/AKfycbyjmyRXazKMVO9EriZ_XeLuExuT42kGrwQ5dUdigd5fnBleNMqVjZBLwbzdcT6JA3UV/exec";
*/
const API_KEY = 'AIzaSyBWpMikCgZhjQtyEJfxjlXCfHISA8QOYzY'; 
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
var excel = SpreadsheetApp.getActiveSpreadsheet();
var sheet_config = excel.getSheetByName("Config");
var token = sheet_config.getRange(1, 2).getValue();
var webAppUrl = sheet_config.getRange(2, 2).getValue();
var getMes = sheet_config.getRange(3, 2).getValue();
var setWebhooks = sheet_config.getRange(4, 2).getValue();

function getMe() {
  let response = UrlFetchApp.fetch(getMes);
  console.log(response.getContentText());
}
function doGet(e) {
  return HtmlService.createHtmlOutput("Xin chào đến với BotTelegram");
}
function setWebhook() {
  let response = UrlFetchApp.fetch(setWebhooks);
  console.log(response.getContentText());
}

// Hàm giao tiếp với Gemini
function askGemini(prompt) {
  const payload = {
    "contents":[
        {"role": "model",
         "parts":[{
           "text": "You are a helpful assisstant.  Yor name is J2TEAM GPT"}]},
        {"role": "user",
         "parts":[{
           "text": prompt }]
        },
    ]
  }

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(URL, options);
    const json = JSON.parse(response.getContentText());
    return json["candidates"][0]["content"]["parts"][0]["text"];
  } catch (e) {
    return `Error: ${e.message}`;
  }
}

// Author: JUNO_OKYO - J2TEAM
// Recreated by orinn2k7







function sendDocument(chat_id, file_id, caption, keyBoard) {
  let data = {
    method: "post",
    payload: {
      method: "sendDocument",
      chat_id: String(chat_id),
      document: file_id, // Thay file_id bằng URL hoặc đường dẫn đến tệp
      caption: caption, // Chú thích cho tệp nếu cần
      reply_markup: JSON.stringify(keyBoard)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + "/", data);
}

/*
function sendText(chat_id, text, keyBoard) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyBoard)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + "/", data);
}
*/

function sendText(chat_id, text, keyBoard, documentUrl, caption) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyBoard)
    }
  };

  if (documentUrl && caption) {
    data.payload.method = "sendDocument";
    data.payload.document = documentUrl;
    data.payload.caption = caption;
  }

  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + "/", data);
}

function send() {
  let chat_id = "5302906337"; //"YOUR_ID";
  let text = "Tôi sẽ hỗ trợ bạn theo danh sách dưới đây:";
  sendText(chat_id, text, MENU);
}
function sendGiaCrypto() {
  let chat_id = "5302906337"; //"YOUR_ID";
  let text = "Tôi sẽ hỗ trợ bạn theo danh sách dưới đây:";
  sendText(chat_id, text, MENUCRYPTO);
}
function sendGiaCryptodaily() {
  let chat_id = "5302906337"; //"YOUR_ID"; 
  let text = "/coinsprice";    
  let answer = answerCommand(text);    
  sendText(chat_id, `${answer[0][0]}: ${answer[0][1]}`);    
}
function sendbillfoodsdailyweek() {
  let chat_id = "5302906337"; //"YOUR_ID"; 
  let text = "/billfoods";    
  let answer = answerCommand(text);    
  sendText(chat_id, `${answer[0][0]}: ${answer[0][1]}`);    
}

function sendmaytinh() {
  let chat_id = "5302906337"; //"YOUR_ID";
  let text = "Tôi sẽ hỗ trợ bạn theo danh sách dưới đây:";
  sendText(chat_id, text, MAYTINH);
}

function sendchatgemini() {
  let chat_id = "5302906337"; //"YOUR_ID";
  // Lấy giá trị từ ô G13 của sheet "Commands"
  let sheetCommands = excel.getSheetByName("Commands");  
  let text = sheetCommands.getRange("C33").getValue(); // Lấy giá trị từ C33
  sendText(chat_id, "Đang lấy dữ liệu....");  
  // Thời gian nghỉ 5 giây
  Utilities.sleep(15000);
  let geminiResponse = askGemini(text); // Gọi Gemini API
  sendText(chat_id, geminiResponse); // Gửi phản hồi từ Gemini
}


function answerCommand(command) {
  let sheetCommands = excel.getSheetByName("Commands");
  let lastRow = sheetCommands.getLastRow();
  if (lastRow > 1) {
    let commandsArray = sheetCommands.getRange(2, 3, lastRow - 1).getValues().flat();
    let commandRow = commandsArray.indexOf(command) + 2;
    if (commandRow > 1) {
      let answer = sheetCommands.getRange(commandRow, 1, 1, 2).getValues();
      return answer;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function tmp() {
  let command = "/coinsprice";
  let answer = answerCommand(command);
  if (answer) {
    console.log(answer)
  }
  else {
    console.log("Thất bại")
  }
}


function doPost(e) {
  let contents = JSON.parse(e.postData.contents);
  let chat_id = contents.message.chat.id;
  let text = contents.message.text;
  excel.getSheetByName("Debug").getRange(1, 1).setValue(JSON.stringify(contents, null, 5));
   // Store text in Commands sheet C33
  excel.getSheetByName("Commands").getRange("C33").setValue(text); 
  var comment = text.split(" ").slice(1).join(" ");
  // Lấy giá trị của ô C33 từ sheet "Commands"
  let sheetCommands = excel.getSheetByName("Commands");
  let cellValue = sheetCommands.getRange("C33").getValue();  
   if ((/^\//.exec(text))) { 
    if (text === "/start" || text === "/myid") {      
      sendText(chat_id, `ID Telegram của bạn: ${chat_id}`);
      send();
    }
    else if (text === "/crypto") {             
      sendGiaCrypto();
    } 
    else if (text === "/maytinh") {            
      sendmaytinh();
    }
    else {
      let answer = answerCommand(text);
      if (answer) {
        sendText(chat_id, `${answer[0][0]}: ${answer[0][1]}`);
      }
      else {
        sendText(chat_id, `${text} không tìm thấy`);         
      }
    }
    Utilities.sleep(2000); // 15-second delay ONLY before this specific condition
    if (text === cellValue) { // ADDED 15-SECOND DELAY FOR THIS CONDITION       
      sendchatgemini();
    } 
  }
  excel.getSheetByName("Messages").appendRow([new Date(), chat_id, text]);
}
  
 const ggsheetid = "1kLfvssx0hydNglTACiUQHpYIhz5Nus6xtIHc9ELxvp4";
 const chatteid = '5302906337'
 const sheetrange = "B4:L35"
 function creatpng() {
  createjob(ggsheetid, "Crypto", sheetrange, token, chatteid);
 } 
