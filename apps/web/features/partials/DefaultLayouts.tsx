import React from 'react';

export default function DefaultLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background max-w-[520px] min-w-[520px] max-h-screen min-h-screen flex-col justify-between items-center">
      {children}
    </div>
  );
}
