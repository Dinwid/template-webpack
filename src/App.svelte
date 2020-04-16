<script>
	let name = '';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<input bind:value={name} placeholder="Ваше имя?">
<h1>Привет, {name || 'незнакомец'}!</h1>