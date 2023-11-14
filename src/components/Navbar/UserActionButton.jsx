import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    console.log(user)

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2"> 
            {
                user ? <Link href="/users/dashboard">Dashboard</Link> : null
            }
            <Link href={actionUrl} className="bg-color-secondary text-color-putih py-1 px-12 inline-block rounded-lg">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton