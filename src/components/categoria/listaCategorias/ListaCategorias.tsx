import React, { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/CardCategoria';


function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro, tente novamente')
        }
    }


    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
        <h1 className='w-full text-4xl text-center p-8 bg-blue-100'>Categorias</h1>
        <div className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
        </div>
        </>
    )
}

export default ListaCategoria