let s = 0, m = 0, ms = 0, flag = false, count = 0, txt = "", res = localStorage.getItem("best");
const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const typeTime = [];
let secondValue = "0", msvalue="00", result = "";
document.querySelector(".bestTime").innerHTML = `Best time: ${localStorage.getItem("best")}s`;
document.addEventListener("keydown",function(e){
  if(!flag){
    flag = true;
    document.querySelector(".sequenceDiv p").classList.remove("initial");
    document.querySelector(".sequenceDiv p").classList.add("sequence");
    timerObject = setInterval(timer,10);
  }
  console.log(e.key);
  if(e.key==="Enter"){
    clearInterval(timerObject);
    document.querySelector(".timerDisplay").innerHTML = "0.00";
    document.querySelector(".feedback").innerHTML = "A";
    document.querySelector(".sequence").innerHTML = "";
    document.querySelector(".detailed").style.display = "none";
    for(let i=0;i<26;i++)
    {
      typeTime.pop();
      document.querySelector(".result"+i).innerHTML = "";
    }
    s = 0; m = 0; ms = 0; flag = false; count = 0; txt = "";
    secondValue = "0"; msvalue = "00";
  }
   else if(e.keyCode==arr[count].charCodeAt()){
    txt = txt+arr[count];
    document.querySelector(".sequence").innerHTML = txt;
    typeTime.push(`${secondValue}.${msvalue}s`);
    count++;
    if(count<26){
    document.querySelector(".feedback").innerHTML = arr[count];
    }
    else{
      clearInterval(timerObject);
      store();
      document.querySelector(".detailed").style.display = "block";
      document.querySelector(".feedback").innerHTML = "Success!";
      for(let i=0;i<26;i++)
      {
        document.querySelector(".result"+i).innerHTML = `${arr[i]}: ${typeTime[i]}`;
      }
    }
  }

});

function timer(){
  ms++;
  if(ms==100)
  {
    s++;
    ms = 0;
  }
  secondValue = s.toString();
  msvalue = ms.toString().padStart(2,"0");
  document.querySelector(".timerDisplay").innerHTML = `Time: ${secondValue}.${msvalue}s`;
}
function store(){
result = `${secondValue}.${msvalue}`;
curr_res = Number(result);
if(curr_res<res){
  res = curr_res;
localStorage.setItem("best",res);
document.querySelector(".bestTime").innerHTML = `Best Time: ${localStorage.getItem("best")}s`;
 }
}
