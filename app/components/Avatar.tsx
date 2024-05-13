"use client"

import Image from "next/image"

interface AvatarProps {
  src: string | null | undefined
}

const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
      <Image 
            className="rounded-full w-full h-full"
            height="30"
            width="30"
            objectFit="contain"
            alt="avatar"
            src={src || "/images/avatar.jpg"}
            />
  )
}

export default Avatar