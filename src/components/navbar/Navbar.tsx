import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
  let navigate = useNavigate()


  let navbarComponent


  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia LOVE</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Produto</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar