<script lang="ts">
  import { filter } from '../stores/extensions';
  import type { FilterType } from '../types';

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ];

  const setFilter = (newFilter: FilterType) => {
    filter.set(newFilter);
  };
</script>

<section class="mb-8">
  <div class="flex items-center justify-between">
    <h2 id="extensions-list" class="text-2xl font-bold text-neutral-900 dark:text-white">Extensions List</h2>
    <nav aria-label="Filter extensions">
      <ul class="flex space-x-2">
        {#each filters as { value, label }}
          <li>
            <button
              aria-current={$filter === value ? 'page' : undefined}
              class="px-4 py-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 dark:focus:ring-neutral-200 {$filter === value ? (value === 'all' ? 'bg-[#FF5C5C] text-white' : 'bg-[#1F2544] text-white') : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-[#0F1429] dark:text-neutral-300 dark:hover:bg-neutral-700'}"
              on:click={() => setFilter(value)}
            >
              {label}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</section>
