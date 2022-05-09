const botaoToggleDaSearchbar = document.querySelector("#title_toggle button");
const searchbar = document.querySelector("#searchbar");
const botaoDeBusca = document.querySelector("#searchbar button");
const input = document.querySelector("#searchbar input");

let linkVideo = document.querySelector("iframe");

botaoDeBusca.addEventListener("click", getNovoVideo);
function getNovoVideo()
{
  linkVideo.src = `https://www.youtube.com/embed/${input.value}`;
  searchbar.classList.add("hidden");
  botaoToggleDaSearchbar.classList.remove("hidden");
}

botaoToggleDaSearchbar.addEventListener("click", showSearchbar);
function showSearchbar()
{
  botaoToggleDaSearchbar.classList.add("hidden");
  searchbar.classList.remove("hidden");
}