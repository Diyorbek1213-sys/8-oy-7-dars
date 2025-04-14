import React from 'react'
import { Product } from '../types/types'
import Card from './Card'


type Props = {
    data: Product[]
}

const Home: React.FC<Props> = ({ data }) => {

    return (
        <div className='container mx-auto mt-7'>
            <div className='grid grid-cols-4 gap-y-5'>
                {
                    data ? data.map((product) => (
                        <Card p={product} key={product.id} />
                    )) : <h3>Loading...</h3>
                }
            </div>
        </div>
    )
}

export default Home