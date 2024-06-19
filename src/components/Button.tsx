import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'danger'
    | 'error'
    | 'black'
  className?: string
}

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
  info: 'bg-teal-600 hover:bg-teal-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  error: 'bg-red-800 hover:bg-red-900 text-white',
  black: 'bg-black hover:bg-gray-900 text-white border border-gray-800',
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:scale-105 transition-all duration-400 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
