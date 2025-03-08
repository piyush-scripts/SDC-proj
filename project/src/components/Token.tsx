import React, { useState } from 'react';
import { CircleIcon, SquareIcon, TriangleIcon, KeyIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Token() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const expectedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkplcnJ5V2l0aFRvbSIsInBhc3MiOiJpX3NlZV9kZWFkX3Blb3BsZSJ9.Agd39wACSabXb5wQikYrWXUoY5s1YvbqkaL6P2JAlRk"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify the token here
    if (token.trim()) {
      const isValid = token === expectedToken;
      if(isValid){
        navigate('/token2');
      } else {
        console.log({
  "id": "JerryWithTom",
  "pass": "i_see_dead_people"
})
console.log("secret is secret")
      }
      
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <CircleIcon className="text-[#FF0F7B] w-96 h-96 absolute transform -translate-x-1/2 animate-pulse" />
        <TriangleIcon className="text-[#00FF85] w-96 h-96 absolute animate-pulse" />
        <SquareIcon className="text-[#FF0F7B] w-96 h-96 absolute transform translate-x-1/2 animate-pulse" />
      </div>

      {/* Token verification container */}
      <div className="relative z-10 bg-black/80 p-8 rounded-2xl border-2 border-[#00FF85] shadow-[0_0_50px_rgba(0,255,133,0.3)] w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <KeyIcon className="w-16 h-16 text-[#00FF85] animate-bounce" />
            <div className="absolute -top-2 -right-2">
              <div className="flex gap-2">
                <CircleIcon className="w-4 h-4 text-[#FF0F7B]" />
                <TriangleIcon className="w-4 h-4 text-[#00FF85]" />
                <SquareIcon className="w-4 h-4 text-[#FF0F7B]" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Stage 4
        </h1>
        
        <p className="text-gray-400 text-center mb-8">
          Please find the required token to proceed
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="XXXX-XXXX-XXXX"
              className="w-full bg-black/50 text-white border-2 border-[#00FF85] rounded-lg p-4 focus:outline-none focus:border-[#FF0F7B] transition-colors placeholder-gray-500 text-center tracking-widest"
              maxLength={10000}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <KeyIcon className="w-5 h-5 text-[#00FF85]" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00FF85] hover:bg-[#00FF85]/80 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out transform hover:scale-105"
          >
            Verify Token
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Your token is provided , find it.
          </p>
          <p className="text-[#FF0F7B] text-xs mt-2">
            You got the required things to make the token.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Token;