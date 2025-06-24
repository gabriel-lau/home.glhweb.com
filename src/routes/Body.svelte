<script>
	import { Skeleton, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte';
	import Work from './Work.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="container mx-auto flex flex-wrap overflow-scroll pb-16">
	<Work />
	<Projects />
</div>
