import React from 'react'

export default function InputName() {
    return (
        <div>
            <input 
                className="input is-primary is-large has-text-centered" 
                type="text" 
                placeholder="Ingresa tu nombre de usuario" 
                required
            />
        </div>
    )
}
