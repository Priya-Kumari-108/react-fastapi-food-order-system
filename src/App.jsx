import { useState } from 'react'
import axios from 'axios'

const foods = [
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burger', emoji: '🍔' },
  { name: 'Sandwich', emoji: '🥪' },
  { name: 'Pasta', emoji: '🍝' },
  { name: 'Coffee', emoji: '☕' },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    food: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFoodSelect = (food) => {
    setFormData({
      ...formData,
      food,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage('')
    setError('')

    try {
      await axios.post('http://localhost:5000/orders', formData)

      setMessage('Your order has been placed successfully.')
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Server unavailable. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Food Order
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Choose your favorite food
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-gray-800">
            Food Menu
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {foods.map((food) => (
              <button
                key={food.name}
                type="button"
                onClick={() => handleFoodSelect(food.name)}
                className={`rounded-xl border p-4 text-center transition ${
                  formData.food === food.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="text-3xl">{food.emoji}</div>

                <p className="mt-2 text-sm font-medium text-gray-700">
                  {food.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {message && (
          <div className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
            Selected Food:{' '}
            <span className="font-semibold text-gray-800">
              {formData.food || 'None'}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Submitting...' : 'Place Order'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default App