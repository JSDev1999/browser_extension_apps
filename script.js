async function fetchData() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const record = await res.json();
  console.log(record);
  if (record?.status == 200) {
    const joke = document.getElementById("joke");
    joke.innerHTML = record.joke;
  }
}

function getNewJoke() {
  fetchData();
}

document.getElementById("fetchButton").addEventListener("click", getNewJoke);
fetchData();
