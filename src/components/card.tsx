interface CardProps {
  title: string;
  description: string;
  href?: string;
}

export function Card({ title, description, href }: CardProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-purple-700 rounded-xl shadow-lg hover:bg-yellow-600 transition duration-300 cursor-pointer"
    >
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </a>
  );
}
