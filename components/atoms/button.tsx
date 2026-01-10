import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "default" | "destructive";
  outline?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  outline = false,
  loading = false,
  fullWidth = false,
  disabled,
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-lg px-4 py-2 font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed";

  const variantStyles = {
    primary: outline
      ? "text-blue-500 bg-transparent hover:bg-blue-50 disabled:text-blue-200 disabled:hover:bg-transparent"
      : "bg-blue-500 text-white hover:bg-blue-600 disabled:text-white",
    default:
      "bg-neutral-600 text-white hover:bg-neutral-700 disabled:text-white",
    destructive: "bg-red-500 text-white hover:bg-red-600 disabled:text-white",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        fullWidth && "w-full",
        disabled && "cursor-not-allowed",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
