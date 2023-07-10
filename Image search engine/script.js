const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "bBpf_oygynpa0Hf-8X0hzGU8DgV_u0Q6sid_7XLb_ZA"; //"Add you own access key given by unspalsh or any website you use"

let keyboard = "";
let page = 1;

async function searchImages() {
  keyboard = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyboard}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  loader.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchResult.innerHTML = ""; // Clear previous search results
  searchImages();
});

showMoreBtn.addEventListener("click", (e) => {
  page++;
  searchImages();
});

// Add the 'fade-in' class to the search result images
function fadeInImages() {
  const images = document.querySelectorAll("#search-result img");
  images.forEach((image) => {
    image.classList.add("fade-in");
  });
}

// Add the 'fade-in' class to the body element
function fadeInPage() {
  const body = document.body;
  body.classList.add("fade-in");
}

// Call the 'fadeInPage' function to trigger the fade-in animation
window.addEventListener("load", fadeInPage);
