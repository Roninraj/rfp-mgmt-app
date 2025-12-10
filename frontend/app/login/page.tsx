'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'requester' as 'requester' | 'vendor',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setSuccess('Logging in...');
      await login(formData.email, formData.password, formData.role);
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => router.push('/dashboard'), 1000);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Login
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
                </h1>
                {error && (
                  <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                    {success}
                  </div>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                 
                  <div className="form-group">
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="requester">Requester (Create RFPs)</option>
                      <option value="vendor">Vendor (Submit Proposals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/register"
                      className="text-blue-300 hover:underline font-medium"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    // <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4">
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    //     <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

    //     {error && (
    //       <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
    //         {error}
    //       </div>
    //     )}

    //     {success && (
    //       <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
    //         {success}
    //       </div>
    //     )}

    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div className="form-group">
    //         <label htmlFor="email">Email *</label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           placeholder="john@example.com"
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="password">Password *</label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           placeholder="Your password"
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="role">Role *</label>
    //         <select
    //           id="role"
    //           name="role"
    //           value={formData.role}
    //           onChange={handleChange}
    //           required
    //         >
    //           <option value="requester">Requester</option>
    //           <option value="vendor">Vendor</option>
    //         </select>
    //       </div>

    //       <button
    //         type="submit"
    //         disabled={isLoading}
    //         className="btn-primary w-full"
    //       >
    //         {isLoading ? 'Logging in...' : 'Login'}
    //       </button>
    //     </form>

    //     <div className="mt-6 pt-6 border-t border-slate-200">
    //       <p className="text-center text-slate-600">
    //         Don't have an account?{' '}
    //         <Link href="/register" className="text-blue-600 hover:underline font-medium">
    //           Register here
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
