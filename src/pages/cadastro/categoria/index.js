import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import './categoria.css';
import Button from '../../../components/Button';
import dadosIniciais from '../../../data/dados_iniciais.json'
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  
  const valoresIniciais = {
    titulo: " ",
    descricao: " ",
    cor: "#000"
  }

  const [categorias, setCategoria] = useState(dadosIniciais.categorias)
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value)
  }

  useEffect(() => {
    console.log("aqui");
    const URL_TOP = "http://localhost:8080/categorias";
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategoria([
          ...categorias,
          ...resposta,
        ]);
      })

    /*setTimeout(() => {
      setCategoria([
        ...categorias,
          {
          id: 1,
          titulo: "Experiments at Home",
          descricao: "Experiments that you can do at home",
          cor: "#FFF"
          },
          {
          id: 2,
          titulo: "Experiments for Kids",
          descricao: "Experiments that you can do with your kids",
          cor: "#ccc"
          }
      ])
    }, 4000)*/
  }, []);

  return (
    <PageDefault>
      <h1>Nova Categoria </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategoria([
          ...categorias,
          values
        ])
        setValues(valoresIniciais)
      }}>
        
        <FormField 
          label="Nome"
          value={values.titulo}
          name="titulo"
          type="text"
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          value={values.descricao}
          name="descricao"
          type="textarea"
          id="text-area"
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          value={values.cor}
          name="cor"
          type="color"
          onChange={handleChange}
        />

        <FormField 
          label="Código de segurança"
          value={values.nome}
          name="nome"
          type="text"
          onChange={handleChange}
        />
    
        <div>
          <Button className="button-save">
            Salvar
              </Button>
          <Button className="button-clean">
            Limpar
              </Button>
        </div>
      </form>

      <table>
        <thead>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </thead>
        <tbody>
        {
          categorias.map(categoria => 
            <tr>
              <td>{categoria.titulo}</td>
              <td>{categoria.descricao ? categoria.descricao : "Categoria sem descrição"}</td>
              <td>Editar</td>
              <td>Remover</td>
            </tr>)
        }
        </tbody>
      </table>


      <Link to="/">
        Ir para home
          </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;