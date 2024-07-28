"use client"
function MenuBtn({ setMenu }: { setMenu: Function }) {
    return (
        <div>
            <button onClick={() => setMenu(true)} className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Menu</button>

        </div >
    )
}

export default MenuBtn
