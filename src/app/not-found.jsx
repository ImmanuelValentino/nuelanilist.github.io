"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
Link

const Page = () => { 
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-4">
            <FileSearch size={44} color="white" className="bg-color-secondary"/>
            <h3 className="text-color-secondary text-4xl font-bold">NOT FOUND</h3>
            <Link href="/" className="text-color-putih hover:text-color-secondary transition-all" >Kembali</Link>
            </div>
        </div>
    )
}

export default Page