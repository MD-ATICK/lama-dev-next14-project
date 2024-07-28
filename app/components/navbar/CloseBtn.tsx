import React from 'react'

function CloseBtn({ setMenu }: { setMenu: Function }) {
    return (
        <div>
            <button onClick={() => setMenu(false)} className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Close</button>
        </div>
    )
}

export default CloseBtn
