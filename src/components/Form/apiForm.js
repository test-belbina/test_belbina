
export default class ApiForm {

	ID = '5c962c460df1b023e6654af209cae82b';
	SID = '4fc852140f8ac4e880c7b6543f9b6896';
	EMAIL = 'edTech500@gmail.com';
	API_MAIL = 'https://api.sendpulse.com';
	GRAND_TYPE = 'Ed Tech';

	SHEET_URL = 'https://sheet.best/api/sheets/675bec1d-fd6a-49ec-a7d0-22d7220cebaa';

	token = '';

	getEToken() {
		const reqToken = JSON.stringify({
			grant_type: 'client_credentials',
			client_id: this.ID,
			client_secret: this.SID
		});

		return fetch(this.API_MAIL + '/oauth/access_token', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: reqToken
		}).then((result) => {
			//const token: TokenResponse = result.json;
			//this.token = [token.token_type, token.access_token].join(' ');
			return result.json();
		}).then(data => {
			this.token = [data.token_type, data.access_token].join(' ');
			console.info('getEToken', this.token);
			return [data.token_type, data.access_token].join(' ');
		});
	}

	sendMail(name, email) {
		this.getEToken().then(token => {
			const mailBody = JSON.stringify({
				text:"test email by service",
				subject: "Belbina test",
				from : {"name": "Ed Tech", "email": this.EMAIL},
				to: [{ name, email}]
			});


			fetch(this.API_MAIL + '/smtp/emails', {
				method: 'post',
				headers: {'Content-Type': 'application/json', 'Authorization': token},
				body: mailBody
			}).then((result) => {
				//const token: TokenResponse = result.json;
				//this.token = [token.token_type, token.access_token].join(' ');
				return result.json();
			}).then(data => {
				console.info('sendMail', data);
			});
		});
	}
}