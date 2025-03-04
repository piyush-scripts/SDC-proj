import React, { useState } from 'react';
import { CircleIcon, SquareIcon, TriangleIcon, KeyIcon, ShieldIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Token2() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      navigate('/login2');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated light beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FF0F7B]/20 to-transparent animate-pulse" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#00FF85]/20 to-transparent animate-pulse delay-100" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#FF0F7B]/20 to-transparent animate-pulse delay-200" />
      </div>

      {/* Token verification container */}
      <div className="relative z-10 bg-black/80 p-12 rounded-3xl border-2 border-[#00FF85] shadow-[0_0_100px_rgba(0,255,133,0.1)] backdrop-blur-xl w-full max-w-lg">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00FF85] blur-2xl opacity-20 animate-pulse" />
            <ShieldIcon className="w-32 h-32 text-[#00FF85] relative z-10" />
            <KeyIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-black" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white text-center mt-12 mb-3">
          Stage 5
        </h1>
        <p className="text-[#00FF85] text-center mb-12 text-lg tracking-[0.2em] uppercase">
          Verify Your Entry
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF85] via-[#FF0F7B] to-[#00FF85] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="ENTER YOUR TOKEN"
              className="relative w-full bg-black text-[#00FF85] border-2 border-[#00FF85] rounded-xl p-6 focus:outline-none focus:border-[#FF0F7B] transition-all placeholder-[#00FF85]/50 text-center tracking-[0.5em] text-xl"
              maxLength={14}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00FF85] hover:bg-[#00FF85]/90 text-black font-bold py-6 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,133,0.3)]"
          >
            Authenticate
          </button>
        </form>

        <div className="mt-12 space-y-4">
          <p className="text-[#00FF85]/70 text-center text-sm tracking-wider">
            "Your invitation is your key to survival"
          </p>
          <div className="flex justify-center gap-6">
            <CircleIcon className="w-6 h-6 text-[#FF0F7B] animate-bounce" />
            <SquareIcon className="w-6 h-6 text-[#00FF85] animate-bounce delay-100" />
            <TriangleIcon className="w-6 h-6 text-[#FF0F7B] animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token2;