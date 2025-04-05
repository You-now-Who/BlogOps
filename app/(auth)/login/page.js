"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function page() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const router = useRouter()

  useEffect(() => {
    (async () => { 
        if (Cookies.get("magic-words") != undefined){
            console.log('Redirecting')
            router.push("/")
        }
    })()
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password})
    })
    
    if (!res.ok){
        setMessage("Wrong codes!!! Access Denied")
    }

    else {
        setMessage("Access granted! Redirecting...")
        Cookies.set("magic-words", password, { expires: 7 })
        console.log(Cookies.get("magic-words"))
    }
  };

  return (
    <div 
        className="bg-black text-green-500 font-mono min-h-screen flex items-center justify-center"
    >
        <div className="p-6 bg-black border border-green-500 rounded shadow-md max-w-lg w-full">
            <p className="text-lg">
                linux@shemmarie: <span className="text-gray-400">Awaiting Master Codes:</span>
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 bg-black text-green-500 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter Master Codes"
                    />
                    <span 
                        onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                        className="absolute right-3 top-2.5 cursor-pointer text-green-500"
                    >
                        {showPassword ? "🙈" : "👁️"} {/* Eye icon */}
                    </span>
                </div>
                <button 
                    type="submit" 
                    className="mt-4 px-6 py-2 bg-green-500 text-black rounded shadow-md hover:shadow-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                >
                    Enter
                </button>
            </form>
            {message && <p className="mt-4 text-green-400">{message}</p>}
        </div>
    </div>
  );
}

export default page;