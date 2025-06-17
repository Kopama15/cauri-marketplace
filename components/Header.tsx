import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-black flex items-center gap-2">
        <img src="/logo.svg" className="h-8" alt="logo"/> Cauri
      </div>
      <input type="text" placeholder="Rechercher" className="border rounded px-4 py-2 w-1/2" />
      <div className="flex items-center gap-4 text-gray-600">
        <User className="h-5" /> <ShoppingCart className="h-5" />
      </div>
    </header>
  );
}