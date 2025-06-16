import { cva, VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

const keyCapVariants = cva('inline-flex items-center justify-center rounded-lg border shadow-sm', {
  variants: {
    size: {
      md: 'h-8 px-2 text-sm',
    },
    variant: {
      default: 'bg-white border-gray-350 text-gray-700 font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

type KeyCapProps = VariantProps<typeof keyCapVariants> & {
  children: string | React.ReactElement;
  className?: string;
};

const KeyCap = ({ children, size, variant, className }: KeyCapProps) => {
  return <div className={cn(keyCapVariants({ size, variant }), className)}>{children}</div>;
};

export default KeyCap;
