<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { seo } from '$lib/stores/SeoStore';
	import { page } from '$app/stores';

	export let data;

	let loading = false;

	seo.set({
		title: 'listd',
		description: 'listd',
	});
</script>

<div class="hero-container mx-auto flex max-w-sm flex-col items-center justify-center p-4">
	{#if $page.data.session}
		<p class="my-4 text-center">
			{#if !data.lists.length}
				{$LL.pages.root.loggedIn.messages.createList()}
			{/if}
		</p>
		<a href="/create" class="variant-filled-secondary btn" data-sveltekit-preload-data="hover"
			>{$LL.buttons.create()}</a>
		<ul class="list-nav mt-4">
			{#each data.lists as list}
				<li class="list">
					<a href={`/list/${list.id}`}>
						<span class="flex-auto">
							<dt>{list.title}</dt>
							<dd>{list.description}</dd>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="my-4 text-center">{$LL.pages.root.messages.tagline()}</p>
		<button
			on:click|once={function loginClick() {
				loading = true;
				signIn('google');
			}}
			disabled={loading}
			class="variant-filled-primary btn cursor-pointer">
			{#if loading}
				{$LL.messages.pleaseWait()} <ProgressRadial class="ml-2 h-6 w-6" stroke={100} />
			{:else}
				{$LL.buttons.loginYouTube()}
			{/if}
		</button>
	{/if}
</div>
