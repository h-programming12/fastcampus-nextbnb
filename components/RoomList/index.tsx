/* eslint-disable @next/next/no-img-element */

import { RoomType } from '@/interface'
import { ReactNode } from 'react'

export function RoomItem({ room }: { room: RoomType }) {
  return (
    <div key={room.id}>
      <img
        src={room?.images?.[0]}
        alt={room.title}
        className="rounded-md w-full h-auto object-fit"
      />
      <div className="mt-2 font-semibold text-sm">{room.title}</div>
      <span className="text-xs px-2 py-1 rounded-full bg-black text-white mt-1">
        {room.category}
      </span>
      <div className="mt-1 text-gray-400 text-sm">{room.address}</div>
      <div className="mt-1 text-sm">
        {room?.price?.toLocaleString()}원{' '}
        <span className="text-gray-500"> /박</span>
      </div>
    </div>
  )
}

export function GridLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 sm:px-4 md:px-8 lg:px-16 mt-20">
      {children}
    </div>
  )
}
