import React from 'react'
import {Icons} from './Icons'

function LeftSideBarLink({to,title,icon,children,...props}) {
  return (
    <li>
        <a
        href={to}
        props
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-slate-500 dark:hover:border-gray-800 pr-6"
        >
        <span className="inline-flex justify-center items-center ml-4">
            {children}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">
            {title}
        </span>
        </a>
    </li>
  )
}

export default LeftSideBarLink