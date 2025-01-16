export const queryKeys = {
  currentPageActivity: (pageNum: number, size: number, category: string, sort: string) =>
    ['currentPageActivity', pageNum, size, category, sort] as const,

  popularActivity: (page: number, size: number) => ['popularActivity', page, size],

  searchPageActivity: (keyword: string, pageNum: number, size: number) =>
    ['searchPageActivity', keyword, pageNum, size] as const,

  getActivities: (
    methodValue: number | null,
    size?: number,
    category?: string,
    keyword?: string,
    sort?: 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest',
  ) => ['activities', methodValue, size, category, keyword, sort],
};
