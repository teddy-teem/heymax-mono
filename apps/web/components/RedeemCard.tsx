import { COLORS, Typography } from '@heymax/ui';
import Image from 'next/image';
import React from 'react';

export interface RedeemCardProp {
  icon: string;
  title: string;
  body: string;
  instruction: string;
}

export default function RedeemCard({
  icon,
  title,
  body,
  instruction,
}: RedeemCardProp) {
  return (
    <div className="ml-8 p-2 rounded-lg bg-[#1C0E4B] flex flex-row items-center gap-2 cursor-pointer w-full">
      <Image src={icon} height={60} width={60} alt={'Icons'} />
      <div className="flex flex-col w-4/5 gap-1">
        <Typography variant="h4">{title}</Typography>
        <Typography color="gray" style={{ flexWrap: 'wrap' }}>{body}</Typography>
        <Typography color={COLORS.default.primary}>{instruction}</Typography>
      </div>
    </div>
  );
}
