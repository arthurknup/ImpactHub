import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

function Home() {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex' }}>
        <Sidebar />

        <main style={{ padding: '20px' }}>
          <h1>Dashboard Financeiro</h1>

          <p>Bem-vindo ao ImpactHub.</p>
        </main>
      </div>
    </div>
  )
}

export default Home