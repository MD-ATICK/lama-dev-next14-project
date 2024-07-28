import React from 'react'
import Loading from './components/loading/Loading'

export default function loading() {
    return (
        <div className=' pt-12'>
            <Loading step={3} />
        </div>
    )
}
