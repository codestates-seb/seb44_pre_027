import PencilIcon from '@/assets/icons/PencilIcon';
import SmallPencilIcon from '@/assets/icons/SmallPencilIcon';
import LabelItem, { LabelItemArray } from './LabelItem';
import React from 'react';

interface LabelContainerProps {}

const LabelContainer = ({}: LabelContainerProps) => {
  return (
    <section>
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
