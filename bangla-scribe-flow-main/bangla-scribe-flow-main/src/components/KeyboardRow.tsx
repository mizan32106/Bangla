
import React from 'react';
import { cn } from '@/lib/utils';

type KeyboardRowProps = {
  children: React.ReactNode;
  className?: string;
};

const KeyboardRow: React.FC<KeyboardRowProps> = ({ children, className }) => {
  return (
    <div className={cn('flex w-full gap-1 mb-1', className)}>
      {children}
    </div>
  );
};

export default KeyboardRow;
