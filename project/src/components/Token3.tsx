import React, { useState } from "react";
import {
  CircleIcon,
  SquareIcon,
  TriangleIcon,
  CookieIcon,
  KeyIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
Cookies.set("token", "sgfsd@%^35FfSDT7213$@^!&gdj@*", { expires: 7 });
function Token3() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const expectedToken = "sgfsd@%^35FfSDT7213$@^!&gdj@*";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      const isValid = token === expectedToken;
      if(isValid){
        navigate("/login");
      }
      else{
        console.log("its sweet")
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated cookies background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <CookieIcon
              className={`w-12 h-12 ${
                i % 2 === 0 ? "text-[#FF0F7B]" : "text-[#00FF85]"
              } opacity-20`}
            />
          </div>
        ))}
      </div>

      {/* Token verification container */}
      <div className="relative z-10 bg-gradient-to-br from-black/90 to-black/70 p-12 rounded-3xl border-2 border-[#00FF85] shadow-[0_0_60px_rgba(0,255,133,0.2)] backdrop-blur-xl w-full max-w-lg">
        {/* Decorative header */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00FF85] blur-3xl opacity-20 animate-pulse"></div>
            <CookieIcon className="w-32 h-32 text-[#00FF85] relative z-10" />
            <KeyIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-black" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white text-center mt-12 mb-3">
          Final Stage
        </h1>
        <p className="text-[#00FF85] text-center mb-12 text-lg tracking-[0.2em] uppercase">
          Enter the last key , join the game.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF85] via-[#FF0F7B] to-[#00FF85] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter the key"
                className="w-full bg-black text-[#00FF85] border-2 border-[#00FF85] rounded-xl p-6 focus:outline-none focus:border-[#FF0F7B] transition-all placeholder-[#00FF85]/50 text-center tracking-[0.5em] text-xl"
                maxLength={1000}
              />
              <CookieIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#00FF85]/50" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00FF85] hover:bg-[#00FF85]/90 text-black font-bold py-6 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,133,0.3)] relative overflow-hidden group"
          >
            <span className="relative z-10">Begin Round 2</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0F7B] to-[#FF0F7B]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </form>

        <div className="mt-12 space-y-4">
          <div className="flex justify-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#FF0F7B] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <CircleIcon className="w-8 h-8 text-[#FF0F7B] relative z-10" />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00FF85] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <SquareIcon className="w-8 h-8 text-[#00FF85] relative z-10" />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#FF0F7B] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <TriangleIcon className="w-8 h-8 text-[#FF0F7B] relative z-10" />
            </div>
          </div>
          <p className="text-[#00FF85]/70 text-center text-sm tracking-wider">
            "Choose your dessert wisely"
          </p>
        </div>

        {/* Decorative corner cookies */}
        <div className="absolute top-4 left-4 opacity-30">
          <CookieIcon className="w-6 h-6 text-[#FF0F7B]" />
        </div>
        <div className="absolute top-4 right-4 opacity-30">
          <CookieIcon className="w-6 h-6 text-[#00FF85]" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-30">
          <CookieIcon className="w-6 h-6 text-[#00FF85]" />
        </div>
        <div className="absolute bottom-4 right-4 opacity-30">
          <CookieIcon className="w-6 h-6 text-[#FF0F7B]" />
        </div>
      </div>
    </div>
  );
}

export default Token3;
