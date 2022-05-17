import { Controller, Get } from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';

@Controller()
export class ProductsController {
	@Get()
	public async getProducts() {
		return { status: 'pass' };
	}
}
