import React from 'react'
import { useRouter } from "next/router"

export default function Login() {
    const router = useRouter();

    const onLogin = (e) => {
        e.preventDefault();
        router.push("/dashboard ")
    }
    return (
        <div>
            <input placeholder="User Name"></input>
            <input placeholder="Password" type="password"></input>
            <button type="button" onClick={onLogin}>
                Login
            </button>
        </div>
    )
}
