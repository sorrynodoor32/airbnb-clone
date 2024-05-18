"use client"

import Image from "next/image"

interface AvatarProps {
  src: string | null | undefined
}

const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
      <Image 
            className="rounded-full w-[30px] h-[30px] object-contain"
            alt="avatar"
            src={src || "/images/no-user.jpg"}
            width={30}
            height={30}
      />
  )
}

export default Avatar