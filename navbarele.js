import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Navbar() {
const [open, setOpen] = useState(false);


const navItems = [
{ label: "Home", href: "#" },
{ label: "Features", href: "#features" },
{ label: "Pricing", href: "#pricing" },
{ label: "Contact", href: "#contact" },
];


return (
<nav className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-7xl px-4">
<div className="flex h-16 items-center justify-between">
{/* Logo */}
<div className="text-xl font-bold">MyApp</div>


{/* Desktop menu */}
<div className="hidden md:flex md:items-center md:space-x-6">
{navItems.map((item) => (
<a
key={item.label}
href={item.href}
className="text-sm font-medium text-gray-700 hover:text-black transition"
>
{item.label}
</a>
))}
<Button size="sm">Sign In</Button>
</div>


{/* Mobile menu button */}
<button
onClick={() => setOpen(!open)}
className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
>
{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
</button>
</div>
</div>


{/* Mobile menu */}
{open && (
<div className="md:hidden border-t">
<div className="space-y-1 px-4 py-3">
{navItems.map((item) => (
<a
key={item.label}
href={item.href}
className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
>
{item.label}
</a>
))}
<Button className="w-full mt-2">Sign In</Button>
</div>
</div>
)}
</nav>
);
}

