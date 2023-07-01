function appendValue(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  const result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}

function clearResult() {
  document.getElementById("result").value = "";
}
function cancel(){
  let temp=document.getElementById("result").value;
  let red="wprd"
  if(temp!=""){
    document.getElementById("result").value=temp.slice(0,temp.length-1)
  }
}
function detect(){
  var input=document.getElementById('result').value;
}