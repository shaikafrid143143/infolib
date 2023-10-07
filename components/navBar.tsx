"use client";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react"

export default function NavBar(){
    const [isOpen, setOpen] = useState(false)
        return(
            <div className=' bg-primary mb-[-2px]'>
                <div className='flex items-center justify-between'>
                    <img src="https://www.infocomtechnology.com/images/logo.png" 
                    className='w-3/5 ml-4'
                    />
                    <a className='mr-2 mt-4 bg-lightBlue text-white rounded-md
                    font-bold '>
                        <Hamburger  toggled={isOpen} size={28} toggle={setOpen} />
                    </a>
                </div>
            </div>
        )

}