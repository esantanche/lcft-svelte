<script context="module">

	import { APP_CONFIGURATION } from '../../appConfiguration';

	export async function preload({ host, path, params, query }, session) {

		let [nid, titleSlug] = params.slug;

		console.log("article preload nid=", nid);
		console.log("processbrowser ", process.browser);

		// console.log("titleSlug=",titleSlug);

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/view/article?_format=json&nid=${nid}`);

		const jsonresponse = await res.json();

		const article = jsonresponse[0];

		return { article };

	}

</script>

<script>

	// FIXME it lookslike this prop cannot be modified
	export let article;

</script>

<style>

</style>


<p>{article.nid}</p>

<p>{article.title}</p>

{@html article.body}
