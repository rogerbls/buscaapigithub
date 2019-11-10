import Layout from '../components/Layout'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

export default class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        nome: null,
        user: null,
    }
    
  }

  buscar = e => {
    e.preventDefault()
      const {nome} = this.state
      fetch("https://api.github.com/users/"+nome)
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .catch(err=>console.log(err))
    }

    componentDidMount() {
      this.refs.editText.focus()
    }
    
  render(){
    const {user} = this.state;
    return (
      <Layout>
        <div>
          <form onSubmit={this.buscar}>
            <div class="input-group mb-3">
            <input class="form-control" type="text" ref="editText" 
            placeholder="Digite o nome do usuário para buscar no GitHub" 
            onChange={e => this.setState({nome: e.target.value})}/>
            <button type="submit">Buscar</button>
            </div>
          </form> 
          <div>
          {user && (
            <div class="card">
              <img  src={user.avatar_url} alt={user.login} width={300} />
              <h3>{user.name}</h3>
              <p>{user.html_url}</p>
              <p>  
              <Link href={{ pathname: '/about', query: { id: this.state.nome }}}>
              <a>{user.public_repos} repositorio públicos</a>
              </Link>
              </p>
             </div>
          )}
          </div>
        </div>
      </Layout>  
    )
  }
}