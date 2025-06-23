<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import { P } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import '../app.css';
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
<DarkMode />
<Button class="bg-blue-500!">Blue Button</Button>
<Button class="bg-green-500!">Green Button</Button>
<P
	>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis
	quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
	dignissimos rem quo veritatis.</P
>

<P
	>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis
	quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
	dignissimos rem quo veritatis.</P
>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
