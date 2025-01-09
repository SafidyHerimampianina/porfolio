
(function() {
	emailjs.init("DQWijvtXNDSlhjGvd");
})();
document.getElementById('emailForm').addEventListener('submit', function(event) {
	event.preventDefault();
	document.getElementById('loader').style.display = 'block';
	const serviceID = 'service_mwbsbia';
	const templateID = 'template_f00klsk';
	emailjs.sendForm(serviceID, templateID, this)
		.then(function(response) {
		document.getElementById('loader').style.display = 'none';
		document.getElementById('responseMessage').style.display = 'block';
		document.getElementById('responseText').innerHTML = '<i class="fa fa-check-circle" style="color: green; margin-right: 8px;"></i>Message envoyé à Safidy HERIMAMPIANINA !';
		document.getElementById('user_name').value = '';
		document.getElementById('user_email').value = '';
		document.getElementById('message').value= '';
		}, function(error) {
		document.getElementById('loader').style.display = 'none';
		document.getElementById('responseMessage').style.display = 'block';
		document.getElementById('responseText').innerHTML = '<i class="fa fa-times-circle" style="color: red; margin-right: 8px;"></i>Erreur lors de l\'envoi de votre message.';
		});
});
function startDownload() {
	var downloadIcon = document.getElementById('downloadIcon');
	const loader = document.getElementById("loadercv");
	downloadIcon.style.display = 'none';
	loader.style.display = 'inline-block';
	const fileUrl = "CV/CV de Safidy Herimampianina.pdf";
	const fileName = "CV de Safidy HERIMAMPIANINA.pdf";
	setTimeout(() => {
		fetch(fileUrl)
			.then(response => {
				if (!response.ok) {
					throw new Error("Erreur lors de la récupération du fichier.");
				}
				return response.blob();
			})
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const anchor = document.createElement('a');
				anchor.href = url;
				anchor.download = fileName;
				document.body.appendChild(anchor);
				anchor.click();
				window.URL.revokeObjectURL(url);
				document.body.removeChild(anchor);
				downloadIcon.style.display = 'inline-block';
				loader.style.display = 'none';
			})
			.catch(error => {
				console.error("Erreur :", error);
				alert("Échec du téléchargement du fichier.");
				downloadIcon.style.display = 'inline-block';
				loader.style.display = 'none';
			});
	}, 1000); 
}
function startDownload1() {
	var downloadIcon1 = document.getElementById('downloadIcon1');
	const loader1 = document.getElementById("loadercv1");
	downloadIcon1.style.display = 'none';
	loader1.style.display = 'inline-block';
	const fileUrl = "CV/CV de Safidy Herimampianina.pdf";
	const fileName = "CV de Safidy HERIMAMPIANINA.pdf";
	setTimeout(() => {
		fetch(fileUrl)
			.then(response => {
				if (!response.ok) {
					throw new Error("Erreur lors de la récupération du fichier.");
				}
				return response.blob();
			})
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const anchor = document.createElement('a');
				anchor.href = url;
				anchor.download = fileName;
				document.body.appendChild(anchor);
				anchor.click();
				window.URL.revokeObjectURL(url);
				document.body.removeChild(anchor);
				downloadIcon1.style.display = 'inline-block';
				loader1.style.display = 'none';
			})
			.catch(error => {
				console.error("Erreur :", error);
				alert("Échec du téléchargement du fichier.");
				downloadIcon1.style.display = 'inline-block';
				loader1.style.display = 'none';
			});
	}, 1000);
}
document.getElementById('menu-toogle').addEventListener('click', function () {
    const menuIcon = this;
    menuIcon.classList.add('rotate-flip-vertical');
    menuIcon.addEventListener('animationend', () => {
        menuIcon.classList.remove('rotate-flip-vertical');
    }, { once: true });
});


