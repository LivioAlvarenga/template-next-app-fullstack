'use client'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { User } from 'lucide-react'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends ComponentProps<typeof Image> {
  src: string
  alt: string
  className?: string
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <AvatarRadix.Root
      className={twMerge(
        'inline-block h-16 w-16 overflow-hidden rounded-full',
        className,
      )}
    >
      <AvatarRadix.Image asChild src={src}>
        <Image
          height={64}
          width={64}
          alt={alt}
          src={src}
          className="h-16 w-16 rounded-[inherit] object-cover"
        />
      </AvatarRadix.Image>
      <AvatarRadix.Fallback
        delayMs={600}
        className="flex h-full w-full items-center justify-center bg-gray-600 text-gray-800"
      >
        <User size={24} />
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
