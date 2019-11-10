import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout';

export default class About extends React.Component{
   static getInitialProps = async function({query: { id } }) {
    const response = await fetch("https://api.github.com/users/"+id+"/repos");
    const repositorios = await response.json();
    return { nome: id, repositorios: repositorios}
  }

  render () {
    return <Layout>
    <div>
    <h1>Lista de Repositórios #{this.props.nome}</h1>
      <table class="table">
                <tr><th>Avatar</th><th>Nome</th><th>Projeto</th><th>Link Repositório</th></tr>
                {
                    this.props.repositorios.map(item => (
                        <tr key={item.id}>
                            <td>
                            <a href={item.html_url}>
                            <img border="0" alt="img" src={item.owner.avatar_url} width="70" height="70"></img></a>
                            </td>
                            <td>{item.owner.login}</td>
                            <td>{item.name}</td>
                            <td>
                                <a href={item.html_url}>{item.html_url}</a>
                            </td>
                        </tr>
                    ))
                }
        </table>
    </div>
    </Layout>
  }
}