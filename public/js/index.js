import { router } from "./util.mjs";

const showUserBtn = document.querySelector(".users-btn");
console.log("User buttons",showUserBtn.textContent);

showUserBtn.addEventListener("click", (e) => {
	console.log("Got to users");
	router("users");
});
