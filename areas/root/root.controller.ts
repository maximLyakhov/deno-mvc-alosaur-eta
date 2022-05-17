import {
	Controller,
	Get,
	View,
} from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';
import { ContentfulService } from '../../services/contentful.service.ts';
import { contentful } from '../../contentful.credentials.ts';

interface Entries {
	items: [
		{
			fields: {
				title: string;
				description: string;
				image: any[];
			};
		},
	];
	includes: {
		Asset: {
			metadata: {};
			sys: {
				id: string;
			};
			fields: {
				file: {
					url: string;
				};
			};
		}[];
	};
}

@Controller()
export class RootController {
	constructor(
		private readonly contentful: ContentfulService,
	) {
	}

	@Get('index.html')
	async indexTemplate() {
		const entries = await this.contentful.getEntries() as Entries;
		const asset = entries.items[0].fields.image[0].sys.id;
		const attImg =
			entries.includes.Asset.filter((el) => el.sys.id === asset)[0].fields
				.file.url;
		console.log(attImg);

		return View('index', {
			...entries.items[0].fields,
			img: attImg,
		});
	}
}
