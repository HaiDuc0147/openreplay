import { LucideIcon } from 'lucide-react';
import React from 'react';

import { TINT } from './utils';

// Empty state shared by the run drawer's dev tabs (screenshots, network, console), so
// "nothing captured" reads as a deliberate state rather than a leftover placeholder.

const TONES = {
  neutral: { bg: TINT.indigo, color: 'var(--color-main)' },
  warning: { bg: TINT.orange, color: 'var(--color-orange-dark)' },
} as const;

function DevEmpty({
  icon: Icon,
  title,
  hint,
  fill,
  tone = 'neutral',
}: {
  icon: LucideIcon;
  title: string;
  hint?: string;
  /** fill the parent's fixed height (expand modal) */
  fill?: boolean;
  tone?: keyof typeof TONES;
}) {
  const { bg, color } = TONES[tone];
  return (
    <div
      role="status"
      className={`flex flex-col items-center justify-center text-center px-4 border border-dashed rounded-lg bg-gray-lightest ${
        fill ? 'h-full' : 'py-8'
      }`}
      // inline: the global .border-gray-light shorthand would reset the dash to solid
      style={{ borderColor: 'var(--color-gray-light)' }}
    >
      <span
        className="flex items-center justify-center w-10 h-10 rounded-full"
        style={{ background: bg, color }}
      >
        <Icon size={18} />
      </span>
      <div className="mt-2 text-sm font-medium text-gray-darkest">{title}</div>
      {hint && (
        <div className="mt-1 max-w-xs text-xs text-gray-dark">{hint}</div>
      )}
    </div>
  );
}

export default DevEmpty;
