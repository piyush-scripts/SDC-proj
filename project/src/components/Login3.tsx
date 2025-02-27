import React, { useState } from 'react';
import { CircleIcon, SquareIcon, TriangleIcon, SyringeIcon, UserCircle2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login3() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      console.log('Login attempted');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated syringes background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              transform: `rotate(${45 + Math.random() * 45}deg)`,
            }}
          >
            <SyringeIcon 
              className={`w-16 h-16 ${i % 2 === 0 ? 'text-[#FF0F7B]' : 'text-[#00FF85]'} opacity-20`}
            />
          </div>
        ))}
      </div>

      {/* Login container */}
      <div className="relative z-10 bg-gradient-to-br from-black/95 to-black/80 p-12 rounded-3xl border border-[#FF0F7B] shadow-[0_0_50px_rgba(255,15,123,0.2)] backdrop-blur-xl w-full max-w-md">
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF0F7B] blur-3xl opacity-20 animate-pulse"></div>
            <UserCircle2Icon className="w-28 h-28 text-[#FF0F7B]" />
            <SyringeIcon className="absolute -bottom-2 -right-2 w-8 h-8 text-[#00FF85] transform rotate-45" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mt-10 mb-2">
          Game 023
        </h1>
        <p className="text-[#FF0F7B] text-center mb-8 text-sm tracking-[0.3em] uppercase">
          Medical Clearance Required
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Patient ID"
                className="w-full bg-black/40 text-white border-2 border-[#FF0F7B]/30 rounded-xl p-4 pl-12 focus:outline-none focus:border-[#00FF85] transition-all placeholder-gray-500 backdrop-blur-sm"
              />
              <SyringeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#FF0F7B]/50" />
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Treatment Code"
                className="w-full bg-black/40 text-white border-2 border-[#FF0F7B]/30 rounded-xl p-4 pl-12 focus:outline-none focus:border-[#00FF85] transition-all placeholder-gray-500 backdrop-blur-sm"
              />
              <SyringeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 text-[#FF0F7B]/50" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF0F7B] via-[#FF0F7B]/80 to-[#FF0F7B] text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,15,123,0.4)] transform hover:scale-[1.02] relative overflow-hidden group"
          >
            <span className="relative z-10">Begin Treatment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85] to-[#00FF85]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </form>

        <div className="mt-10 space-y-4">
          <div className="flex justify-center gap-4">
            <CircleIcon className="w-6 h-6 text-[#FF0F7B] animate-pulse" />
            <SquareIcon className="w-6 h-6 text-[#00FF85] animate-pulse delay-75" />
            <TriangleIcon className="w-6 h-6 text-[#FF0F7B] animate-pulse delay-150" />
          </div>
          <p className="text-gray-400 text-center text-sm">
            "Your treatment awaits. Will you survive?"
          </p>
        </div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#FF0F7B]/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#00FF85]/10 to-transparent"></div>
      </div>
    </div>
  );
}

export default Login3;