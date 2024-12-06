const time = document.getElementById("clock");

// remember this function as this function can be used to run the code snipper in the given time interval until the script closes!!
setInterval(() => {
  const date = new Date();
  time.innerHTML = `<p>${date.toLocaleTimeString()}</p>`;
}, 1000);
