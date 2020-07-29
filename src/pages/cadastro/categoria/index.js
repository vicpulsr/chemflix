import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import './categoria.css';
import Button from '../../../components/Button';
import dadosIniciais from '../../../data/dados_iniciais.json'

function CadastroCategoria() {
  let rows = [];
  for (let i=0; i < dadosIniciais.categorias.length; i++) {
    rows.push(
      <tr>
        <td>{dadosIniciais.categorias[i].titulo}</td>
        <td>{dadosIniciais.categorias[i].descricao ? dadosIniciais.categorias[0].descricao : "Categoria sem descrição"}</td>
        <td>Editar</td>
        <td>Remover</td>
      </tr>
    );
 }
 
    return (
        <PageDefault>
          <h1>Nova Categoria</h1>

          <form> 
            <label> 
              Nome
            <input type="text" 
            />
            </label>

            <label for="text-area">Descrição</label>
            <textarea id="text-area"></ textarea> 
            
            <label> 
              Cor
            <input type="color" 
            />
            </label>

            <label> 
              Código de segurança
            <input type="text" 
            />
            </label>

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
              {rows}
            </tbody>
          </table>


          <Link to="/">
            Ir para home
          </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;