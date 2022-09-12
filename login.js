
// const submitbutton = document.getElementById("submit");
// const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

// submitbutton.addEventListener("click", (event) => {
// 	event.preventDefault();

// 	let username = document.getElementById("use").value;
// 	let password = document.getElementById("pas").value;

// 	let found = false;
// 	for (let i = 0; i < accounts.length; i++) {
// 		if (accounts[i].user == username) {
// 			found = true;
// 			if (accounts[i].password == password) {
// 				localStorage.setItem("currentUser", JSON.stringify(accounts[i]));

// 				if (accounts[i].type == "admin"||(accounts[i].user=="admin"&&accounts[i].password=="admin"))
// 				{
// 					window.location.href = "./home.html";
// 				} else {
// 					window.location.href = "./admin.html";
// 				}
// 				break;
// 			} else {
// 				alert("password or username is incorrect");
// 				break;
// 			}
// 		}
// 	}
// 	if (!found) alert("account not found");
// });

const submitbutton = document.getElementById("submit");
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

submitbutton.addEventListener("click", (event) => {
	event.preventDefault();

	let username = document.getElementById("use").value;
	let password = document.getElementById("pas").value;

	let found = false;
	for (let i = 0; i < accounts.length; i++) {

		if (accounts[i].user == username) {
			found = true;

			if (accounts[i].password == password) {
				localStorage.setItem("currentUser", JSON.stringify(accounts[i]));

				if (accounts[i].type == "admin"||(accounts[i].user=="admin"&&accounts[i].password=="admin")) {
					window.location.href = "./admin.html";
				} else {
					window.location.href = "./home.html";
				}

				break;

			} else {
				alert("password or username is incorrect");
				
				break;
			}
		}
	}
	if (!found) alert("account not found");
});
























