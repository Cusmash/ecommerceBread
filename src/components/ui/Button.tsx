import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: 'primary' | 'outline' | 'light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'rounded font-medium transition duration-200 ease-in-out';

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-900',
    outline: 'border border-black text-black hover:bg-black hover:text-white',
    light: 'bg-white text-black hover:bg-gray-100 hover:opacity-70'
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {children}
    </button>
  );
};
