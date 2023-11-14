import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="text-color-putih">
            {
                user ? 
                <div>
                <h3>DASHBOARD</h3>
                <h5>WELCOME, {user.name}</h5>
                <Image  src={user.image} alt="..." width={250} height={250} />
                </div>
                  : <div className="flex justify-center items-center ">silhakan login dlu</div>
            }

        </div>
    )
}

export default Page