import React from 'react'

export default function Index() {
    return (
        <div>
            <h1>Home</h1>
            <a href="/api/login" className="py-4 px-2 rounded bg-pink-800 font-bold transition duration-500 shadow-xl hover:shadow hover:bg-pink-700 block w-1/4 text-center mx-auto text-white">
                Comece por aqui!
            </a>
        </div>
    )
}