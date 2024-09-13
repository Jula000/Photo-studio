"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-white ${
        isActive
          ? "font-bold bg-zinc-800 rounded-l-md rounded-r-md"
          : "font-normal"
      } hover:text-zinc-400 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
