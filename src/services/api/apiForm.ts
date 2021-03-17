import { IHttp } from "src/services/IHttp";

interface TokenResponse {
	"token_type": string;
    "expires_in": number;
    "access_token": string;
}

export default class ApiForm {

	private readonly ID:string = '5c962c460df1b023e6654af209cae82b';
	private readonly SID: string = '4fc852140f8ac4e880c7b6543f9b6896';
	private readonly EMAIL: string = 'edTech500@gmail.com';
	private readonly API_MAIL: string = 'https://api.sendpulse.com';
	private readonly GRAND_TYPE: string = 'Ed Tech';

	private readonly SHEET_URL: string = 'https://sheet.best/api/sheets/675bec1d-fd6a-49ec-a7d0-22d7220cebaa';

	private token: string = '';

	constructor(private http: IHttp) {}

	private getEToken(): void {
		const reqToken: string = JSON.stringify({
			grant_type: this.GRAND_TYPE,
			client_id: this.ID,
			client_secret: this.SID
		});

		fetch(this.API_MAIL + '/oauth/access_token', {
			method: 'post',
			body: reqToken
		}).then((result: Response) => {
			console.info('', result);
			//const token: TokenResponse = result.json;
			//this.token = [token.token_type, token.access_token].join(' ');
		});
	}

	public sendMail(name: string, email: string): void {
		this.getEToken()
	}
}