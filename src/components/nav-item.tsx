import Link from "next/link";

import { MaterialIcon } from "./material-icon";

type NavItemProps = {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function NavItem({ href, icon, label, isActive = false, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 typo-body-md transition-colors ${
        isActive
          ? "bg-secondary-container font-semibold text-on-secondary-container active:scale-[0.98]"
          : "text-on-surface-variant hover:bg-surface-container-high"
      }`}
    >
      <MaterialIcon className="text-[20px]">{icon}</MaterialIcon>
      <span>{label}</span>
    </Link>
  );
}
