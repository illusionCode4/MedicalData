'use client';

import { Button } from '@/components/ui/button';
import { CheckCheck, Copy } from 'lucide-react';
import { useState } from 'react';

export const CopyButton = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Button
      onClick={onCopy}
      disabled={!value || isCopied}
      variant='default'
      size='sm'
    >
      Copy Output
      <Icon className='ml-2 h-4 w-4' />
    </Button>
  );
};
