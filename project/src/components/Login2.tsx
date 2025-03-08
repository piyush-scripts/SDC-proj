import React, { useState, useEffect } from 'react';
import { CircleIcon, SquareIcon, TriangleIcon, UserCircle2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    const postData = async () => {
      try {
        await axios.post('https://httpdump.app/dumps/ab872f23-2ebf-4bce-b14c-99d43626857b', {

          password: 'afdsafh@#%@4732GAFGSJ',
          email: 'afdsaf4732GAFGSJ@example.com'
        });
      } catch (err:any) {
        console.log(err.message);
      } 
    };
    
    postData();
  }, []); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email==="afdsaf4732GAFGSJ@example.com" && password==="afdsafh@#%@4732GAFGSJ") {
      navigate("/login3");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-8 gap-4 opacity-5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="aspect-square">
              {i % 3 === 0 ? (
                <CircleIcon className="w-full h-full text-[#FF0F7B]" />
              ) : i % 3 === 1 ? (
                <SquareIcon className="w-full h-full text-[#00FF85]" />
              ) : (
                <TriangleIcon className="w-full h-full text-[#FF0F7B]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Login container */}
      <div className="relative z-10 bg-gradient-to-br from-black/90 to-black/70 p-10 rounded-3xl border border-[#FF0F7B]/30 backdrop-blur-xl w-full max-w-md">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <UserCircle2Icon className="w-24 h-24 text-[#FF0F7B]" />
            <div className="absolute -bottom-2 -right-2 bg-[#00FF85] rounded-full p-2">
              <CircleIcon className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mt-8 mb-2">
          Stage 2
        </h1>
        <p className="text-[#FF0F7B] text-center mb-8 text-sm tracking-widest uppercase">
          Player Verification
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Player Number"
              className="w-full bg-black/30 text-white border border-[#FF0F7B]/50 rounded-xl p-4 focus:outline-none focus:border-[#00FF85] transition-all placeholder-gray-500 backdrop-blur-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access Code"
              className="w-full bg-black/30 text-white border border-[#FF0F7B]/50 rounded-xl p-4 focus:outline-none focus:border-[#00FF85] transition-all placeholder-gray-500 backdrop-blur-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF0F7B] to-[#FF0F7B]/80 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,15,123,0.3)] transform hover:-translate-y-1"
          >
            Join Game
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            "The error is the key, the game is simple"
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <CircleIcon className="w-5 h-5 text-[#FF0F7B] animate-pulse" />
            <SquareIcon className="w-5 h-5 text-[#00FF85] animate-pulse delay-100" />
            <TriangleIcon className="w-5 h-5 text-[#FF0F7B] animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
