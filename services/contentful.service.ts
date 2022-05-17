import { contentful } from '../contentful.credentials.ts';

export class ContentfulService {
	private static async getRequest(params: string) {
		const res = await fetch(
			'https://cdn.contentful.com/spaces/' + contentful.spaceID +
				'/environments/master/entries' + params,
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + contentful.token,
					'Content-Type': 'application/json',
				},
			},
		);
		return res.json();
	}

	public async getEntries() {
		return await ContentfulService.getRequest('?content_type=entry');
	}
}
