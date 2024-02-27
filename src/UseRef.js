import React, { useRef } from 'react'

const UseRef = () => {
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' />
            </form>
        </div>
    )
}

export default UseRef