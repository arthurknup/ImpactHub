import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside
      style={{
        width: '200px',
        backgroundColor: '#1f2937',
        height: '100vh',
        padding: '20px'
      }}
    >
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/gastos">Gastos</Link>
        </li>

        <li>
          <Link to="/receitas">Receitas</Link>
        </li>

        <li>
          <Link to="/usuarios">Usuários</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar