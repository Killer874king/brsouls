interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function Button({ children, onClick, href }: ButtonProps) {
  const baseStyles =
    "px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg transition duration-300 hover:bg-yellow-600";
  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
