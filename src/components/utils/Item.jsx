import React from 'react'
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  console.log(id)
  return (
    <>
      <div>
        <div>
          <h1> {title}</h1>
          <p>{text}</p>
          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <StarIcon className='icon-style text-slate-900' />
              <h1>{rating}</h1>
            </div>
          </div>
          <div>
            <button type='button' className=''>
              <ShoppingBagIcon className='icon-style text-slate-900' />
            </button>
            <button type='button'>{btn}</button>
          </div>
        </div>
        <div>
          <img src={img} alt='img/item-img' className='' />
        </div>
      </div>
    </>
  )
}

export default Item
