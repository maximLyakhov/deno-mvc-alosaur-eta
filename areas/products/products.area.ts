import { Area } from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';
import { ProductsController } from './products.controller.ts';

@Area({
	baseRoute: '/products',
	controllers: [ProductsController],
})
export class ProductsArea {}
