<script lang="ts">
  import { filteredExtensions } from '../stores/extensions';
  import ExtensionCard from './ExtensionCard.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Browser extensions">
  {#if $filteredExtensions.length === 0}
    <p class="text-center py-8 text-neutral-900 dark:text-white col-span-full">
      No extensions found.
    </p>
  {:else}
    {#each $filteredExtensions as extension (extension.name)}
      <div role="listitem">
        <ExtensionCard {extension} />
      </div>
    {/each}
  {/if}
</div>
