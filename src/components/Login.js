import React from 'react'
import {History, useHistory} from "react-router-dom"
function Login() {
    const history = useHistory()
    return (
        <div style={{backgroundImage: "url('https://media.giphy.com/media/gK99k8iMtKeJ2/source.gif')", backgroundSize: "cover", backgroundPosition:"center"}} className="w-screen h-screen text-center">
            <button onClick={()=>history.push("/")} className="text-white mt-96 w-3/4 p-8 font-serif text-4xl bg-gray-800 rounded-2xl opacity-75">L o g i n</button>

        </div>
    )
}

export default Login
