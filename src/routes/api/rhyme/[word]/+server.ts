import suggestRhymes from '$lib/ts/suggestRhymes';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
	const { word } = params;
	
	return new Response(await suggestRhymes(word));
}
