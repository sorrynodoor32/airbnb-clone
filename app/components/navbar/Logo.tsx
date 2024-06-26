"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
      const router = useRouter()
  return (
    <div>
      <Image 
            onClick={()=>router.push("/")}
            alt="Logo"
            className="hidden md:block cursor-pointer object-cover"
            height="100"
            width="100"
            src="./images/air_bnb_logo.svg"
      />
    </div>
  )
}

export default Logo