<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  import Logo from './Logo.svelte';
</script>

<header class="flex items-center justify-between p-4 bg-white dark:bg-[#0F1429] rounded-lg mb-8 shadow-sm">
  <div class="flex items-center space-x-3">
    <Logo />
    <h1 class="text-xl font-bold text-neutral-900 dark:text-white">Extensions</h1>
  </div>
  <div>
    <ThemeToggle />
  </div>
</header>
