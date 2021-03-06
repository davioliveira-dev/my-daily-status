import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className="p-2 hover:underline hover:text-red-800">{children}</a>
        </Link>
    )
}

const NavBar = () => {
    return (
        <div className="nav-bar bg-gray-500 py-4 text-center">

            <NavLink href='/entrar'>Entrar</NavLink>
            <NavLink href='/cadastro'>Cadastre-se</NavLink>
            <NavLink href='/sobre'>Sobre</NavLink>
            
        </div>
    )
}

export default NavBar