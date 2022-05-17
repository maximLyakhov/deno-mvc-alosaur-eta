import { Area } from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';
import { RootController } from './root.controller.ts';

@Area({
	baseRoute: '/',
	controllers: [RootController],
	providers: [],
})
export class RootArea {}
