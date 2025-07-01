export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  slug: string;
  acceptance: number;
}

export type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}