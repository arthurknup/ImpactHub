import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <div
        style={{
          display: 'flex'
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: '20px'
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout