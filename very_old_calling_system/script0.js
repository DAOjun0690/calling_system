/*var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  // 14為中文
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 14 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(guest, counter){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }

    // var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var string0 = "請，";
    var string1 = "號來賓，到，";
    var string2 = "號櫃台。";
    var utterThis = new SpeechSynthesisUtterance(string0 + guest + string1 + counter + string2);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];

        break;
      }
    }
    //取得設定的音頻
    utterThis.pitch = 0.85;
    //取得設定的話速
    utterThis.rate = 1.1;
    //文字轉語音
    synth.speak(utterThis);

}

// inputForm.onsubmit = function(event) {
//   event.preventDefault();
//
//   speak();
//
//   inputTxt.blur();
// }

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}

voiceSelect.onchange = function(){
  speak();
}
*/

function loadVoices(speechSynthesis, select){
    if (voices.length == 0){
        voices = speechSynthesis.getVoices();
        voices.sort(function(voice1, voice2){
            return voice1.name.localeCompare(voice2.name);
        });
        while (select.firstChild){
            select.removeChild(select.firstChild);
        }
        for (var i in voices){
            var option = document.createElement("option");
            option.value = voices[i].lang;
            option.textContent = voices[i].name + " (" + voices[i].lang + ")";
            select.appendChild(option);
        }
    }
}

function stop(){
    speechSynthesis.canel();
}


// ----------------------------------------------------------------------

function calling(counter){
    var inputT = document.getElementById('input').value;

    document.getElementById('p').value = "請" + inputT +"號來賓到第"+ counter +"號櫃台";

    buttonClose();
    speak(inputT, counter);
    buttonOpen();

    document.getElementById('input').value = parseInt(document.getElementById('input').value) + 1 ;
    // guests = guests + 1;
}

function buttonOpen(){
  document.getElementById('1').disabled=false;
  document.getElementById('2').disabled=false;
  document.getElementById('3').disabled=false;
  document.getElementById('4').disabled=false;
  document.getElementById('5').disabled=false;
  document.getElementById('6').disabled=false;
}

function buttonClose(){
  document.getElementById('1').disabled=true;
  document.getElementById('2').disabled=true;
  document.getElementById('3').disabled=true;
  document.getElementById('4').disabled=true;
  document.getElementById('5').disabled=true;
  document.getElementById('6').disabled=true;
}

function test(){
  var synth = window.speechSynthesis;
  var msg = new SpeechSynthesisUtterance('世界你好！');

  var voices = synth.getVoices();
  for(let index = 0; index < voices.length; index++) {
  /*
  "Google US English"
  "Google 日本語"
  "Google 普通话（中国大陆）"
  "Google 粤語（香港）"
  "Google 國語（臺灣）"
  */

  //console.log(this.voices[index].name);
  if(voices[index].name == "Google 國語（臺灣）"){
    //u.lang = 'zh-TW'; //這句絕對不要用
    //要使用Google中文語音的話請不要再用u.lang指定語言
    //不然可能又會被切回系統預設的中文語音
    msg.voice = voices[index];
    break;
  }else{
    //如果沒有則使用預設中文語音
    u.lang = 'zh-TW';
  }
}

  synth.speak(msg);
}
*/
