<script lang="ts">
	import type { YouTubeChannelMetaAPIResponse } from '$/lib/server/YouTubeAPI';

	export let channelIds: Map<string, number>;
	export let channel: YouTubeChannelMetaAPIResponse;
	export let channels: YouTubeChannelMetaAPIResponse[];
</script>

{#if channelIds.has(channel.originId)}
	<button
		on:click={() => {
			const index = channelIds.get(channel.originId);
			if (index !== undefined) {
				channels.splice(index, 1);
				channels = channels;
			}
		}}
		type="button"
		class="variant-filled-primary btn">Remove</button>
{:else}
	<button
		on:click={() => {
			channels.unshift(channel);
			channels = channels;
		}}
		type="button"
		class="variant-ghost-primary btn">Add</button>
{/if}
