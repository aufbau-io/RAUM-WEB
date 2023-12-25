<script>
</script>

<section>
	<div class="wrapper">
		<div class="main">
			<h1>Raum</h1>
			<p>spatial rendering // aufbau</p>
		</div>	
		<div class="buttons">
			<a target="_blank" href="https://cubical-boi.netlify.app"><button><p>demo 0.2.0 // perlin</p></button></a>
			<a target="_blank" href="https://webgl-volumetric-renderer.netlify.app/"><button><p>demo 0.1.0 // volumetric</p></button></a>
		</div>
	</div>
</section>

<style>
	section {
		padding: 0 0;
		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		align-items: center;
		text-align: center;

		/* background: var(--primary-50); */
		overflow: auto;
		z-index: 10;
		gap: 10px;

		/* user-select: none;
		pointer-events: none; */
	}

	.wrapper {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.main {
		/* position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%); */
		max-width: 800px;
		min-width: 270px;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 10px;

		color: var(--background);
		border: solid 1px var(--background);
		/* backdrop-filter: blur(5px); */
		padding:  20px;
		z-index: 10;
	}


	.main h1 {
		padding: 10px;
		font-size: 200px;
		/* background:  var(--background); */
		color: var(--background);
		/* text-border */
		/* -webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: var(--primary); */
	}

	p {
		font-size: 14px;
		color: var(--background);
	}

	.buttons {
		width: 100%;
		display: flex;
		gap: 10px;
	}

	.buttons a {
		width: 50%;
		cursor: pointer;
	}

	button {
		padding: 10px;
		width: 100%;
		border: solid 1px var(--background);
		/* backdrop-filter: blur(5px); */

	}

	button:hover {
		background: var(--background);
		color: var(--primary);
	}

	button:hover p {
		color: var(--primary);
	}

	@media only screen and (max-width: 768px) {
		.main h1 {
		padding: 10px;
		font-size: 80px;
		/* background:  var(--background); */
		color: var(--background);
		/* text-border */
		/* -webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: var(--primary); */
	}

	p {
		font-size: 12px;
		color: var(--background);
	}
	}
</style>
