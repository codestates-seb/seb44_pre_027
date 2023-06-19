import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

interface WriteInputContainerProps extends ComponentPropsWithoutRef<'section'> {
  children?: React.ReactNode;
  subject?: string;
  description?: string;
}

const WriteInputContainer = ({
  children,
  className,
  subject,
  description,
}: WriteInputContainerProps) => {
  return (
    <section className={cn('mt-4 rounded-sm border border-slate-200 p-6 bg-white', className)}>
      <h2 className=" font-medium">{subject}</h2>
      <p className=" mb-3 text-xs text-slate-600">{description}</p>
      {children}
    </section>
  );
};

export default WriteInputContainer;
