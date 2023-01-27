const inputEl = document.querySelector("#list-input");
document.querySelector("#list-form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ list_name: inputEl.value.trim() }),
  })
    .then((res) => res.json())
    .then((data) => {
      //process data here
      if (data.success) {
        return location.reload();
      }
      //take out alert, handle duplicate logic, notify user
      alert(data.message);
    });
});
