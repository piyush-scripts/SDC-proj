import React, { useState } from 'react';
import { CircleIcon, SquareIcon, TriangleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    if (email === 'qwertyuiop@dummy.com' && password === 'gewy7329@dg#5hHFJ') {
      // In a real app, handle authentication here
      navigate('/login2');
    }
    else{
      console.log('PlayerID : qwertyuiop@dummy.com , Password : gewy7329@dg#5hHFJ');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <CircleIcon className="text-[#FF0F7B] w-96 h-96 absolute transform -translate-x-1/2" />
        <TriangleIcon className="text-[#00FF85] w-96 h-96 absolute" />
        <SquareIcon className="text-[#FF0F7B] w-96 h-96 absolute transform translate-x-1/2" />
      </div>

      {/* Login container */}
      <div className="relative z-10 bg-black/80 p-8 rounded-2xl border-2 border-[#FF0F7B] shadow-[0_0_50px_rgba(255,15,123,0.3)] w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <CircleIcon className="w-8 h-8 text-[#FF0F7B]" />
            <TriangleIcon className="w-8 h-8 text-[#00FF85]" />
            <SquareIcon className="w-8 h-8 text-[#FF0F7B]" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Stage 1
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Player ID (Email)"
              className="w-full bg-black/50 text-white border-2 border-[#FF0F7B] rounded-lg p-3 focus:outline-none focus:border-[#00FF85] transition-colors placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-black/50 text-white border-2 border-[#FF0F7B] rounded-lg p-3 focus:outline-none focus:border-[#00FF85] transition-colors placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF0F7B] hover:bg-[#FF0F7B]/80 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out transform hover:scale-105"
          >
            Unlock Stage 2
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          This game consists of 6 stages , find the credentials and win.
        </p>
      </div>
    </div>
  );
}

export default Login;