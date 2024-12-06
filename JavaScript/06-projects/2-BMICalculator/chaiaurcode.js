const form = document.querySelector("form");

// console.log(calculateButton);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const results = document.getElementById("results");

  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = `<p>please enter valid height! ${height} </p>`;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    results.innerHTML = `<p>please enter valid weight! ${weight} </p>`;
  } else {
    const calculatedResult = ((weight / height ** 2) * 10000).toFixed(2);
    results.innerHTML = `${calculatedResult}`;
  }
});

// const formula = ((weight / height ** 2) * 10000).toFixed(2);

// console.log(formula);
