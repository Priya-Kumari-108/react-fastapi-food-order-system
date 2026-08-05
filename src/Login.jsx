import { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Demo login
    navigate('/menu')
  }

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-8 lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Welcome to Foodie 🍴
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-800">
              Delicious food,
              <span className="block text-orange-500">
                just a few clicks away.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-500">
              Discover your favorite meals and place your order quickly
              through our simple food ordering system.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl">🍕</p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Fresh Food
                </p>
              </div>

              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl">⚡</p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Simple Ordering
                </p>
              </div>

              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl">❤️</p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Easy Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">

            {/* Logo */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-4xl">
                🍴
              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-800">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Login to continue to Foodie
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-4 py-3.5 font-semibold text-white transition hover:bg-orange-600 active:scale-[0.99]"
              >
                Login
              </button>
            </form>

            {/* Demo Notice */}
            <div className="mt-6 rounded-xl bg-orange-50 px-4 py-3 text-center">
              <p className="text-xs leading-5 text-gray-500">
                Demo login only. Authentication is not connected to a backend.
              </p>
            </div>

          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            © 2026 Foodie. Simple food ordering system.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login