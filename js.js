document.querySelector('button').onclick = myClick

function myClick() {
  let a = document.querySelector(".inputData").value;
  document.querySelector('.out').innerHTML = a
}

let dataInternet = [165];
document.querySelector(".out_dataInternet").innerHTML = dataInternet;

const selectYear = document.querySelector('.selectYear');
selectYear.onchange = function () {
  let item = selectYear.value;
  console.log(selectYear.value); 
}

const selectMonth = document.querySelector(".selectMonth");
selectMonth.onchange = function () {
  let item = selectMonth.value;
  console.log(selectMonth.value);
};
