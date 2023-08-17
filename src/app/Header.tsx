import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <>
     <div className="w-10 h-10 text-white flex items-center justify-center mr-auto text-md ">
          <Image
            src="data:image/jpeg;base64,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"
            width={500}
            height={500}
            alt="Picture of the author"
          />
           <ul className="ml-10 flex gap-10">
          <li className="mb-2  ">
            <Link href="/login">Login </Link>
          </li>
          <li className=" mb-2">
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
        </div>
   </>
  )
}

export default Header