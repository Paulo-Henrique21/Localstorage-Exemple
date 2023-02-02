import { useState } from "react"

export default function Teste(){

  const [nome, setNome] = useState()

  /* função para armazenar no localstorage */
  const armazenar=(chave,valor)=>{
    localStorage.setItem(chave, valor)
  }

  /* função para consultar no localstorage */
  const consultar=(chave)=>{
    alert(localStorage.getItem(chave))
  }

  /* função para apagar no localstorage */
  const apagar=(chave)=>{
    localStorage.removeItem(chave)
  }
  
  return(
    <>
      <label>Digite um nome</label><br/>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar('ls_nome', nome)}>Gravar Nome</button>
      <button onClick={()=>consultar('ls_nome')}>Ver Nome</button>
      <button onClick={()=>apagar('ls_nome')}>Remover Nome</button>
    </>
  )
}

localStorage.setItem("nome", "Bruno")/* Cria a chave se não existir, se existir ele muda para a nova informação */
  localStorage.getItem("nome")
  /* Obtem valor da chave */
  localStorage.removeItem("nome")
  /* Remove valor da chave */
