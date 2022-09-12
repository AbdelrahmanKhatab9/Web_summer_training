

const submitbutton = document.getElementById("button");

submitbutton.addEventListener("click", (event) => {
	event.preventDefault();
	let firstnameinput = document.getElementById("first");

	let lastnameinput = document.getElementById("last");
	let cityinput = document.getElementById("pro");
	let usernameinput = document.getElementById("user");
	let passwordinput = document.getElementById("pass");
	let emailinput = document.getElementById("email");
	let phonenumberinput = document.getElementById("number");
	let dateinput = document.getElementById("date");
	let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

	let newaccounts = {
		first: firstnameinput.value,
		user: usernameinput.value,
		last: lastnameinput.value,
		city: cityinput.value,
		password: passwordinput.value,
		email: emailinput.value,
		phonenumber: phonenumberinput.value,
		date: dateinput.value,
		type: "user",
	};
	accounts.push(newaccounts);
	localStorage.setItem("accounts", JSON.stringify(accounts));
	window.location.href = "./index2.html";
});