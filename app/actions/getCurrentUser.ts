import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/lib/primadb"

export async function getSession() {
      return getServerSession(authOptions)
}

export default async function getCurrentUser() {
      const session = await getServerSession()

      if(!session?.user?.email){
            return null
      }

      const currentUser = await prisma.user.findUnique({
            where: {
                  email: session.user.email
            }
      })

      if(!currentUser){
            return null
      }

      return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
      }
}