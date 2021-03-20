
export default class ApiForm {
	SHEET_URL = 'https://sheet.best/api/sheets/fc11ea0e-9caf-46c1-95a1-55517d16c0ad';

	token = '';

	sendMail(name, email) {
		fetch('/api.php', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({action: 'mail', name, email})
				}).then((result) => {
					console.info('result', result);
					//const token: TokenResponse = result.json;
					//this.token = [token.token_type, token.access_token].join(' ');
					return result.json();
				}).then(data => {
					console.info('sendMail', data);
				});
	}

	sendData(name, phone, email) {
		return fetch(this.SHEET_URL, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name,
				phone,
				email,
				date: (new Date()).toLocaleString()
			})
		}).then(response => response.json());

	}
}