<script lang="ts">
  export let variant: 'primary' | 'danger' | 'ghost' | 'remove' = 'primary';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled = false;

  const variantClasses = {
    primary: 'bg-neutral-800 text-neutral-0 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100',
    danger: 'bg-red-500 text-neutral-0 hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-400',
    ghost: 'bg-transparent text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-0',
    remove: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-[#1F2544] dark:text-white dark:hover:bg-[#2A3158] px-4 py-2 rounded-lg'
  };
</script>

<button
  {type}
  {disabled}
  class="font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 dark:focus:ring-neutral-200 {variantClasses[variant]} {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
  on:click
>
  <slot />
</button>
