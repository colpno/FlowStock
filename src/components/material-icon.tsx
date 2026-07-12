"use client";

type MaterialIconProps = {
  children: string;
  className?: string;
  fill?: boolean;
  size?: number;
};

/**
 * @see https://fonts.google.com/icons
 */
export function MaterialIcon({
  children,
  className = "",
  fill = false,
  size = 24,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: fill ? '"FILL" 1' : '"FILL" 0',
      }}
    >
      {children}
    </span>
  );
}
