import { ComponentProps, forwardRef } from 'react';
import cn from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const InputVariants = cva(
  'w-full rounded-2xl px-4 py-2 text-gray-900 placeholder-gray-800 shadow-md focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'border-blue-500 caret-blue-800',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type InputProps = ComponentProps<'input'> & VariantProps<typeof InputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(InputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
