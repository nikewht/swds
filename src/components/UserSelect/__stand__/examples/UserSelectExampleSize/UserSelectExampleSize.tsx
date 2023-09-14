import { Example } from '@consta/stand';
import React, { useState } from 'react';

import { UserSelect } from '../../../UserSelect';

type Item = {
  label: string;
  subLabel?: string;
  avatarUrl?: string;
  id: string | number;
};

const items: Item[] = [
  {
    label: 'Андрей Андреев',
    subLabel: 'andrey@gmail.com',
    id: 1,
  },
  {
    label: 'Иван Иванов',
    subLabel: 'ivan@gmail.com',
    id: 2,
  },
  {
    label: 'Егор Егоров',
    subLabel: 'igor@icloud.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    id: 3,
  },
];

export function UserSelectExampleSize() {
  const [value, setValue] = useState<Item | null>();
  return (
    <Example col={1}>
      <UserSelect
        placeholder="Размер s"
        size="s"
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
      <UserSelect
        placeholder="Размер m"
        size="m"
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
      <UserSelect
        placeholder="Размер l"
        size="l"
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
    </Example>
  );
}
