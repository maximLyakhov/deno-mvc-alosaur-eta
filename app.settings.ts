import { AppSettings } from 'https://deno.land/x/alosaur@v0.37.0/mod.ts';
import { ProductsArea } from './areas/products/products.area.ts';
import { RootArea } from './areas/root/root.area.ts';

export const settings: AppSettings = {
	areas: [RootArea, ProductsArea],
	middlewares: [],
	logging: false,
};
