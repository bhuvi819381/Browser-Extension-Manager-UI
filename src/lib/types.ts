export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export type FilterType = 'all' | 'active' | 'inactive';

export type ThemeType = 'light' | 'dark';
