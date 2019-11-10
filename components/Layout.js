import Menu from './Menu';
import Head from 'next/head';

const Layout = props => (
  <div >
    <Head>
    <title>Github API</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </link>
    </Head>
    <div class="container">
    <Menu />
    {props.children}
  </div>
  </div>
)

export default Layout