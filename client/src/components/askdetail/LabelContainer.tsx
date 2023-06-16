import PencilIcon from '@/assets/icons/PencilIcon';
import SmallPencilIcon from '@/assets/icons/SmallPencilIcon';
import LabelItem, { LabelItemArray } from './LabelItem';
import React, { HTMLAttributes } from 'react';

interface LabelContainerProps extends HTMLAttributes<HTMLElement> {}

const LabelContainer = ({ ...attributes }: LabelContainerProps) => {
  return (
    <section {...attributes}>
      {LabelItemArray.map((list, idx) => (
        <LabelItem
          key={`LabelItem${idx}`}
          subject={list.subject}
          listDescription={list.listDescription}
        />
      ))}
    </section>
  );
};

export default LabelContainer;
