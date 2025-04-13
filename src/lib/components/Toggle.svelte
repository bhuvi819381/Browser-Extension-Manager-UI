<script lang="ts">
  export let checked = false;
  export let label = '';
  export let id = '';
  export let labelHidden = false;
</script>

<div class="flex items-center">
  {#if label && !labelHidden}
    <label for={id} class="mr-2 text-neutral-600 dark:text-neutral-300">{label}</label>
  {/if}
  <button
    role="switch"
    aria-checked={checked}
    aria-label={label || 'Toggle'}
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 dark:focus:ring-neutral-200 {checked ? 'bg-[#FF5C5C]' : 'bg-neutral-300 dark:bg-neutral-700'}"
    on:click={() => checked = !checked}
    on:click
  >
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform {checked ? 'translate-x-6' : 'translate-x-1'}"
    ></span>
    {#if labelHidden && label}
      <span class="sr-only">{label}</span>
    {/if}
  </button>
</div>
