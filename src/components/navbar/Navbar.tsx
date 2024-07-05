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
            <Link to="/home" className='hover:underline'>Home</Link>
            <Link to="/categorias" className='hover:underline'>Categorias</Link>
            <Link to="/cadastroTema" className='hover:underline'>Criar Tema</Link> 
            <Link to="/produtos" className='hover:underline'>Produtos</Link>
            <Link to="/perfil" className='hover:underline'>Perfil</Link>
            <Link to="/logout" className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar