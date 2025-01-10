import React from 'react';

interface MyActivitiesEditPageProps {
  params: {
    id: number;
  };
}

export default function MyActivitiesEditPage({ params }: MyActivitiesEditPageProps) {
  return (
    <div>
      체험
      {params.id} 의 수정 page
    </div>
  );
}
