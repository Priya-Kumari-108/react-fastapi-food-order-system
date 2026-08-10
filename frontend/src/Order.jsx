import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'

function Order() {
  const location = useLocation()
  const navigate = useNavigate()

  const selectedFood = location.state?.food || ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const getFoodEmoji = (food) => {
    switch (food) {
      case 'Pizza':
        return '🍕'
      case 'Burger':
        return '🍔'
      case 'Sandwich':
        return '🥪'
      case 'Pasta':
        return '🍝'
      case 'Coffee':
        return '☕'
      default:
        return '🍽️'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')
    setSuccess(false)

    const orderData = {
      name,
      email,
      phone,
      food: selectedFood,
    }

    try {
      await axios.post('http://localhost:5000/orders', orderData)

      setSuccess(true)
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Server unavailable. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  // Directly opening /order without selecting a food
  if (!selectedFood) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
            🍽️
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-800">
            No Food Selected
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Please select a food item from the menu before placing an order.
          </p>

          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Go to Menu
          </button>
        </div>
      </div>
    )
  }

  // Success screen
  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-8">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
            ✓
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-800">
            Order Placed Successfully!
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Your {selectedFood} order has been submitted successfully.
          </p>

          <div className="mt-6 rounded-2xl bg-orange-50 p-4">
            <p className="text-xs text-gray-500">
              Selected Food
            </p>

            <p className="mt-1 text-lg font-bold text-orange-600">
              {getFoodEmoji(selectedFood)} {selectedFood}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Order Another Food
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Top Bar */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            ← Back to Menu
          </button>

          <div className="hidden text-lg font-bold text-gray-800 sm:block">
            Foodie 🍴
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Food Preview */}
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <p className="text-sm font-medium text-gray-500">
              Your Selection
            </p>

            <div className="mt-5 flex h-56 items-center justify-center rounded-2xl bg-orange-50 text-8xl">
              {getFoodEmoji(selectedFood)}
            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-800">
              {selectedFood}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Complete your customer information to place your food order.
            </p>
          </div>

          {/* Order Form */}
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Place Your Order
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details below.
            </p>

            {error && (
              <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Selected Food */}
              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-xs text-gray-500">
                  Selected Food
                </p>

                <p className="mt-1 font-bold text-orange-600">
                  {getFoodEmoji(selectedFood)} {selectedFood}
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 px-4 py-3.5 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order