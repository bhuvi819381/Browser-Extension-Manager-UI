<script lang="ts">
  import type { Extension } from '../types';
  import Toggle from './Toggle.svelte';
  import Button from './Button.svelte';
  import { toggleExtension, removeExtension } from '../stores/extensions';

  export let extension: Extension;

  const handleToggle = () => {
    toggleExtension(extension.name);
  };

  const handleRemove = () => {
    removeExtension(extension.name);
  };
</script>

<article class="bg-white dark:bg-[#1F2544] rounded-lg p-5 shadow-sm transition-all duration-200 hover:shadow-md">
  <div class="flex flex-col space-y-4">
    <div class="flex items-start">
      <figure class="w-14 h-14 mr-4 flex-shrink-0 bg-neutral-100 dark:bg-[#2A3158] p-2 rounded-lg flex items-center justify-center">
        <img src={extension.logo} alt={`${extension.name} logo`} width="36" height="36" />
      </figure>
      <div>
        <h3 class="font-bold text-lg text-neutral-900 dark:text-white">{extension.name}</h3>
        <p class="text-neutral-600 dark:text-gray-300 text-sm mt-1">{extension.description}</p>
      </div>
    </div>
    <footer class="flex items-center justify-between">
      <Button variant="remove" on:click={handleRemove}>
        Remove
      </Button>
      <Toggle
        checked={extension.isActive}
        on:click={handleToggle}
        id={`toggle-${extension.name}`}
        label={extension.isActive ? 'Active' : 'Inactive'}
        labelHidden={true}
      />
    </footer>
  </div>
</article>
