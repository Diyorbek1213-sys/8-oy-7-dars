import { Product } from '@/types/types'
import React from 'react'
import { Button } from './ui/button'

type Props = {
    p: Product
}

const Card: React.FC<Props> = ({ p }) => {
    return (
        <div className="max-w-xs rounded-lg relative overflow-hidden shadow-lg p-5 bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <img src={p?.image} alt={''} className="aspect-square" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{p?.title}</h2>
                <p className="text-gray-600 mt-2">{p?.description}</p>
            </div>
            <div className="px-4 py-2">
                <Button variant={'default'} className='w-full absolute bottom-0 right-0 cursor-pointer'>
                    text
                </Button>
            </div>
        </div>
    )
}

export default Card