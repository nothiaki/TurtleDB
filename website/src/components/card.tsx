import React from 'react';

type Props = {
  icon: React.ElementType,
  title: string,
  desc: string
}

export function Card({ icon: Icon, title, desc }: Props) {
  return (
    <div className="p-6 rounded-xl border border-gray-900">
      <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary-100" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-900">
        {desc}
      </p>
    </div>
  );
}
