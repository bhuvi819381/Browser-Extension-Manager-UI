<script lang="ts">
  import { theme, toggleTheme } from '../stores/theme';
</script>

<button
  aria-label="Toggle color theme"
  aria-pressed={$theme === 'dark'}
  class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 dark:focus:ring-neutral-200 text-neutral-900 dark:text-white"
  on:click={toggleTheme}
>
  <span class="sr-only">{$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
  {#if $theme === 'dark'}
    <img src="/assets/images/icon-sun.svg" alt="" aria-hidden="true" width="22" height="22" />
  {:else}
    <img src="/assets/images/icon-moon.svg" alt="" aria-hidden="true" width="22" height="22" />
  {/if}
</button>
