import { useNavigate } from 'react-router'

const foods = [
  {
    name: 'Pizza',
    emoji: '🍕',
    price: '₹199',
    description: 'Cheesy, fresh and delicious',
  },
  {
    name: 'Burger',
    emoji: '🍔',
    price: '₹149',
    description: 'Juicy burger with fresh ingredients',
  },
  {
    name: 'Sandwich',
    emoji: '🥪',
    price: '₹99',
    description: 'Fresh, crispy and tasty',
  },
  {
    name: 'Pasta',
    emoji: '🍝',
    price: '₹179',
    description: 'Creamy pasta with rich flavor',
  },
  {
    name: 'Coffee',
    emoji: '☕',
    price: '₹79',
    description: 'Hot and refreshing coffee',
  },
]

function Menu() {
  const navigate = useNavigate()

  const handleSelect = (food) => {
    navigate('/order', {
      state: {
        food,
      },
    })
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Header */}
      <header className="border-b border-orange-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Foodie 🍴
            </h1>

            <p className="text-xs text-gray-500 sm:text-sm">
              Fresh food. Simple ordering.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Logout
          </button>

        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-10 text-white shadow-lg sm:px-10 sm:py-12">
            <p className="text-sm font-medium text-orange-100">
              Welcome to Foodie
            </p>

            <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              What would you like to eat today?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-orange-50 sm:text-base">
              Choose your favorite food, enter your details and place your
              order in just a few simple steps.
            </p>
          </div>

        </div>
      </section>

      {/* Menu */}
      <main className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Popular Menu
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Pick one item to continue.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {foods.map((food) => (
              <div
                key={food.name}
                className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Food Image */}
                <div className="flex h-40 items-center justify-center rounded-xl bg-orange-50 text-7xl transition duration-200 group-hover:scale-[1.02]">
                  {food.emoji}
                </div>

                {/* Food Details */}
                <div className="mt-4">

                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-bold text-gray-800">
                      {food.name}
                    </h4>

                    <span className="text-base font-bold text-orange-500">
                      {food.price}
                    </span>
                  </div>

                  <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
                    {food.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleSelect(food.name)}
                    className="mt-4 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
                  >
                    Order Now
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          © 2026 Foodie. Simple food ordering system.
        </div>
      </footer>

    </div>
  )
}

export default Menu