<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './lib/components/Header.svelte';
  import FilterBar from './lib/components/FilterBar.svelte';
  import ExtensionList from './lib/components/ExtensionList.svelte';
  import { loadExtensions } from './lib/stores/extensions';
  import { theme } from './lib/stores/theme';

  // Update HTML class when theme changes
  $: {
    if ($theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Load extensions data on component mount
  onMount(() => {
    loadExtensions();

    // Set initial background based on theme
    if ($theme === 'dark') {
      document.body.style.setProperty('--app-background', 'var(--gradient-dark)');
    } else {
      document.body.style.setProperty('--app-background', 'var(--gradient-light)');
    }
  });
</script>

<div class="min-h-screen transition-colors duration-300" style="background: var(--app-background, var(--gradient-light));">
  <div class="container mx-auto px-6 py-10 max-w-6xl">
    <Header />
    <main class="mt-8" id="main-content">
      <FilterBar />
      <section aria-labelledby="extensions-list">
        <ExtensionList />
      </section>
    </main>
    <footer class="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>Browser Extension Manager | Frontend Mentor Challenge</p>
    </footer>
  </div>
</div>
