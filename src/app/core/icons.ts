export function getProjectIcon(icon: string): string {
  const icons: Record<string, string> = {
    shield: '<path d="M32 4L8 16v16c0 13.3 10.2 25.7 24 29 13.8-3.3 24-15.7 24-29V16L32 4z"/>',
    radar: '<circle cx="32" cy="32" r="28" opacity="0.3"/><circle cx="32" cy="32" r="18" opacity="0.5"/><circle cx="32" cy="32" r="8"/>',
    grid: '<rect x="8" y="8" width="20" height="20" rx="3"/><rect x="36" y="8" width="20" height="20" rx="3" opacity="0.6"/><rect x="8" y="36" width="20" height="20" rx="3" opacity="0.6"/><rect x="36" y="36" width="20" height="20" rx="3" opacity="0.3"/>',
    mountain: '<path d="M4 32 L16 12 L28 28 L36 18 L52 40 L4 40Z" opacity="0.4"/><path d="M4 40 L16 24 L28 34 L36 22 L52 46 L4 46Z" opacity="0.7"/>',
    triangle: '<polygon points="32,6 58,54 6,54"/><polygon points="32,16 50,48 14,48" opacity="0.3"/>',
    bars: '<rect x="10" y="28" width="8" height="26" rx="2"/><rect x="24" y="18" width="8" height="36" rx="2" opacity="0.7"/><rect x="38" y="10" width="8" height="44" rx="2" opacity="0.5"/><rect x="52" y="22" width="8" height="32" rx="2" opacity="0.3"/>'
  };
  return icons[icon] ?? icons['bars'];
}
