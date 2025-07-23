const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let repo = JSON.parse(this.responseText);
    let lastUpdated = new Date(repo.pushed_at);
    document.getElementById("last-updated").innerHTML =
      `Last updated: ${lastUpdated.toLocaleString()}`;
  }
};
xhttp.open(
  "GET",
  "https://api.github.com/repos/Samuel-Riedel/https://github.com/Samuel-Riedel/3d_Portfolio",
  true
);
xhttp.send();

export default xhttp;
