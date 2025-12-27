import React, { useState } from 'react';
import Carousel from './Carousel';

export default function Logg() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setError('');
  };

  const handleSubmit = () => {
    if (isLogin) {
      if (!form.email || !form.password) {
        setError('Please fill in all fields');
        return;
      }
      const user = users.find(u => u.email === form.email && u.password === form.password);
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
      } else {
        setError('Invalid email or password. Please sign up if you don\'t have an account.');
      }
    } else {
      if (!form.name || !form.email || !form.password) {
        setError('Please fill in all fields');
        return;
      }
      if (users.find(u => u.email === form.email)) {
        setError('Email already exists. Please login.');
        return;
      }
      setUsers([...users, { name: form.name, email: form.email, password: form.password }]);
      setIsLogin(true);
      setForm({ name: '', email: '', password: '' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setForm({ name: '', email: '', password: '' });
  };

  if (isLoggedIn) {
    return <Carousel user={currentUser} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/30 p-12 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
          <p className="text-slate-400">{isLogin ? 'Login to continue' : 'Sign up to get started'}</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <input
              type="password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-400">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}