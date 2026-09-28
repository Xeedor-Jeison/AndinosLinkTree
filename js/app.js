document.getElementById("company-name").innerText = CONFIG.companyName;
document.getElementById("description").innerText = CONFIG.description;
document.getElementById("logo").src = CONFIG.logo;

const container = document.getElementById("links-container");

CONFIG.links.forEach((link) => {
  const button = document.createElement("a");
  button.classList.add("link-btn");
  button.href = link.url;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.innerText = link.title;
  container.appendChild(button);
});

const footer = document.createElement("div");
footer.classList.add("footer");
footer.innerHTML = `© ${new Date().getFullYear()} ${CONFIG.companyName}`;

container.after(footer);