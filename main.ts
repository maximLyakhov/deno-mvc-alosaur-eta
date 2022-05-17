import {
	App,
	ViewRenderConfig,
} from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';
import { AlosaurOpenApiBuilder } from 'https://deno.land/x/alosaur@v0.37.0/openapi/mod.ts';
import { configure } from 'https://deno.land/x/eta@v1.12.3/config.ts';
import { renderFile } from 'https://deno.land/x/eta@v1.12.3/mod.ts';
import { settings } from './app.settings.ts';

AlosaurOpenApiBuilder.create(settings)
	.registerControllers()
	.addTitle('Basic Application')
	.addVersion('1.0.0')
	.addDescription('Example Alosaur OpenApi generate')
	.addServer({
		url: 'http://localhost:8000',
		description: 'Local server',
	})
	.saveToFile('./api.json');

const app = new App(settings);
const viewPath = Deno.cwd() + '/views/';
configure({ views: viewPath, async: true });

const viewRenderConfig: ViewRenderConfig = {
	type: 'eta',
	basePath: viewPath,
	getBody: async (path: string, model: any) => await renderFile(path, model),
};

app.useViewRender(viewRenderConfig);
await app.listen();
