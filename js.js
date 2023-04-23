document.querySelector('button').onclick = myClick

function myClick() {
  let a = document.querySelector(".inputText").value;
  document.querySelector('.out').innerHTML = a
}

let dataInternet = [11];
document.querySelector(".out_dataInternet").innerHTML = dataInternet;

const selectYear = document.querySelector('.selectYear');
selectYear.onchange = function () {
  let item = selectYear.value;
  console.log(selectYear.value); 
}
