import { LinkOutlined } from '@ant-design/icons';
import React from 'react';

import { Circle } from './Count';
import ExCard from './ExCard';
import { AMBER, GREEN, ORANGE, RED, TEAL } from './palette';

const speedColor = (progress: number) => {
  if (progress >= 90) return RED;
  if (progress >= 50) return ORANGE;
  if (progress >= 20) return AMBER;
  return GREEN;
};

// TODO - delete this
function SlowestDomain(props: any) {
  const rows = [
    {
      label: 'kroger.com',
      value: '28,162 ms',
      progress: 97,
      icon: <LinkOutlined size={12} style={{ color: TEAL }} />,
    },
    {
      label: 'instacart.com',
      value: '3,165 ms',
      progress: 60,
      icon: <LinkOutlined size={12} style={{ color: TEAL }} />,
    },
    {
      label: 'gifs.eco.br',
      value: '1,503 ms',
      progress: 40,
      icon: <LinkOutlined size={12} style={{ color: TEAL }} />,
    },
    {
      label: 'cdn.byintera.com',
      value: '512 ms',
      progress: 10,
      icon: <LinkOutlined size={12} style={{ color: TEAL }} />,
    },
    {
      label: 'analytics.twitter.com',
      value: '110 ms',
      progress: 5,
      icon: <LinkOutlined size={12} style={{ color: TEAL }} />,
    },
  ];

  const lineWidth = 240;

  return (
    <ExCard {...props}>
      <div className="flex gap-1 flex-col">
        {rows.map((r) => (
          <div className="flex items-center gap-2 border-b border-dotted last:border-0 py-2 first:pt-0 last:pb-0">
            <Circle badgeType={2}>{r.icon}</Circle>
            <div className="ml-2 flex flex-col gap-0">
              <div>{r.label}</div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    height: 2,
                    width: lineWidth * (0.01 * r.progress),
                    background: speedColor(r.progress),
                  }}
                  className="rounded-l"
                />
                <div
                  style={{
                    height: 2,
                    width: lineWidth - lineWidth * (0.01 * r.progress),
                  }}
                  className="rounded-r bg-gray-lighter"
                />
              </div>
            </div>
            <div
              className="min-w-8 ml-auto font-medium"
              style={{ color: speedColor(r.progress) }}
            >
              {r.value}
            </div>
          </div>
        ))}
      </div>
    </ExCard>
  );
}

export default SlowestDomain;
