<script>
	import './app.css';

	import { onMount } from 'svelte';
	import { screenType, isIframe } from '$lib/store/store';
	import { page } from '$app/stores';

	import Header from '$lib/components/header/header.svelte';
	// import Footer from '$lib/components/footer/footer.svelte';
	// import LeftSidebar from '$lib/components/sidebars/left.svelte';
	// import RightSidebar from '$lib/components/sidebars/right.svelte';

	$: showSidebar = $screenType == 3 && $page.url.pathname == '/' ? true : false;
	// $: showSidebar = true;

	let Geometry;

	onMount(async () => {
		const module = await import('$lib/graphics/three3d.svelte');
		Geometry = module.default;

		function getDeviceType() {
			const width =
				window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if (
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			) {
				// This is a device which supports touch
				if (width <= 767) {
					// Mobile
					return 1;
				} else {
					// Tablet
					return 2;
				}
			} else {
				// This is likely a laptop or desktop
				return 3;
			}
		}

		screenType.set(getDeviceType());
		isIframe.set(window.location !== window.parent.location);

	});


</script>

<svelte:head>
	<title>RAUM</title>
	<meta name="description" content="RAUM. SPATIAL RENDERING." />

	<link
		rel="preload"
		href="/fonts/NB-Architekt-Pro-Light.woff"
		as="font"
		type="font/woff"
		crossorigin="anonymous"
	/>

	<!-- <link
	rel="preload"
	href="/fonts/manifold_1.woff2"
	as="font"
	type="font/woff2"
	crossorigin="anonymous"
/> -->

	<!-- <link
		rel="preload"
		href="/fonts/NB-Architekt-Pro-Bold.woff"
		as="font"
		type="font/woff"
		crossorigin="anonymous"
	/> -->

	<link rel="preload" href="/sand.jpg" as="image">

	<!-- <link rel="preload" href="icons/cv.svg" as="image">
	<link rel="preload" href="icons/insta.svg" as="image">
	<link rel="preload" href="icons/mail.svg" as="image"> -->
</svelte:head>

<svelte:component this={Geometry} />

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100dvh;
	}

</style>
