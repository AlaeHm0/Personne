import React, { useState } from 'react';
import "./ex1.css";
export default function Gerer(){
    const [tableP, setTableP] = useState([])
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPass] = useState('')
    const ajouter = () => {
        if(nom && prenom && password){
            const per = {nom, prenom, password}
            setTableP([...tableP, per])
        }else{
            alert("Entrer tout les champs!")
        }
    }
    const deleting = (i) => {
        const copyT = [...tableP]
        const confirmation = window.confirm(`Are you sure you want to delete this item?`)
        if(confirmation){
            copyT.splice(i, 1)
            setTableP([...copyT])
        }
    }
    return(
        <>
        <div className='container mt-5'>
            <div className='card'>
                <div className='card-body bg-dark text-white'>
                    
                        <h1 className='card-title text-center'>Gestion de Personnes</h1>
                    
                    <div className='form-group mt-2'>
                        <label className='fs-3 mb-2'>Nom</label>
                        <input 
                        type='text'
                        placeholder='nom'
                        className='form-control'
                        onChange={(e)=>{setNom(e.target.value)}}
                        />
                    </div>
                    <div className='form-group mt-2'>
                        <label className='fs-3 mb-2'>Prenom</label>
                        <input
                        className='form-control'
                        type='text'
                        placeholder='prenom'
                        onChange={(e)=>{setPrenom(e.target.value)}}
                        />
                    </div>
                    <div className='form-group mt-2'>
                        <label className='fs-3 mb-2'>Mot de passe</label>
                        <input
                        className='form-control'
                        type='password'
                        placeholder='password'
                        onChange={(e)=>{setPass(e.target.value)}}
                        />
                    </div>
                    <button onClick={ajouter} className='btn btn-outline-primary p-2 form-control mt-4'>Ajouter</button>
                    
                </div>
            </div>
        </div>
        {
            (tableP.length > 0) && (
                <div>
                    <h1 className='text-center mt-3'>Tableau des Personnes</h1>
                    <table className='table text-center table-dark mt-3 '><thead className='table-primary'>
                        <tr><th>ID</th><th>Nom</th><th>Prenom</th><th>Mot de pass</th><th>Actions</th></tr></thead><tbody>
                        {tableP.map((p,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{p.nom}</td>
                                <td>{p.prenom}</td>
                                <td>{p.password}</td>
                                <td>
                                    <button className='btn btn-primary p-2 me-3'>Modifier</button>
                                    <button className='btn btn-primary p-2' onClick={()=>deleting(i)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody></table>
                </div>
            )
        }
        </>
    )
}
