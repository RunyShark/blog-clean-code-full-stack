import React from 'react';
import { Text, Title } from '../../../../../ui';

interface UserProfileHeaderProps {
  title: string;
  description: string;
}

export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  title,
  description,
}) => (
  <header className="border-b border-[rgba(255,255,255,0.2)] pb-12">
    <Title elementTextType="h3" fontSize="text-xl">
      {title}
    </Title>
    <Text>{description}</Text>
  </header>
);
