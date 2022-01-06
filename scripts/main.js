var footerDate = document.getElementById('footer-date');
var currDate = new Date();

footerDate.innerHTML = currDate.getFullYear();

function onSubmit() {
	var contactBtn = document.getElementById('contact-send');
	contactBtn.setAttribute('disabled', 'true');

	var email = document.getElementById('email');
	var subject = document.getElementById('subject');
	var message = document.getElementById('message');

	if (email.value == '' || subject.value == '' || message.value == '') {
		contactBtn.setAttribute('disabled', 'true');
	} else {
		alert(
			`Email: ${email.value}, Subject: ${subject.value}, Message: ${message.value}`
		);
	}
}
