interface SectionHeaderProps {
 badge?: string;
 title: string;
 subtitle?: string;
 center?: boolean;
}

export function SectionHeader({ badge, title, subtitle, center = false }: SectionHeaderProps) {
 return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-100 text-base leading-relaxed max-w-2xl" style={center ? { margin: "12px auto 0" } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
