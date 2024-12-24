import ProfileSideNavMenu from '@/components/profile/common/ProfileSideNavMenu';
import React from 'react';

export default function ProfilePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ProfileSideNavMenu />
      <div>{children}</div>
    </section>
  );
}
