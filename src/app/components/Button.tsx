import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export default function Button({children, ...props}: ButtonProps){
    return (
        <button className="bg-[#2C9CF0] px-[30px] py-[10px] mt-7 mb-5" {...props}>{children}</button>
    )
}