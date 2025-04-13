'use client'
import { Gift, useCart } from '@/context/CartContext'

const CartItem = ({ gift }: { gift: Gift }) => {
  const { removeFromCart } = useCart()

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div>
        <h4 className="text-lg font-semibold">{gift.title}</h4>
        <p className="text-sm text-gray-500">{gift.description}</p>
      </div>
      <div className="text-right">
        <p className="text-green-600 font-bold">{gift.price}€</p>
        <button
          onClick={() => removeFromCart(gift.id)}
          className="text-red-500 text-sm mt-1 hover:underline"
        >
          Retirer
        </button>
      </div>
    </div>
  )
}

export default CartItem