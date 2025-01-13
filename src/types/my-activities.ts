export type MyActivities = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImages: Array<{
    id: number;
    imageUrl: string;
  }>;
  schedules: Array<{
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  }>;
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
};
