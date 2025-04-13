import { writable, derived } from 'svelte/store';
import type { Extension, FilterType } from '../types';

// Initial state will be loaded from data.json
export const extensions = writable<Extension[]>([]);

// Current filter state
export const filter = writable<FilterType>('all');

// Derived store for filtered extensions
export const filteredExtensions = derived(
  [extensions, filter],
  ([$extensions, $filter]) => {
    switch ($filter) {
      case 'active':
        return $extensions.filter(ext => ext.isActive);
      case 'inactive':
        return $extensions.filter(ext => !ext.isActive);
      default:
        return $extensions;
    }
  }
);

// Load extensions from data.json
export const loadExtensions = async () => {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    extensions.set(data);
  } catch (error) {
    console.error('Failed to load extensions:', error);
  }
};

// Toggle extension active state
export const toggleExtension = (name: string) => {
  extensions.update(items => 
    items.map(item => 
      item.name === name 
        ? { ...item, isActive: !item.isActive } 
        : item
    )
  );
};

// Remove extension from list
export const removeExtension = (name: string) => {
  extensions.update(items => items.filter(item => item.name !== name));
};
