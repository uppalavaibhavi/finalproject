function compute() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rangeInput").value;
  t = document.getElementById("years").value;
  a = document.getElementById("result").value;
  document.getElementById("word").innerHTML = "You will receive an amount of ";
  document.getElementById("result").innerHTML = p * (1 + (r / 100) * t);
  document.getElementById("message").innerHTML = "in the year ";
  const currentYear = new Date();
  document.getElementById("current").innerHTML =
    parseInt(t) + currentYear.getFullYear();
}

