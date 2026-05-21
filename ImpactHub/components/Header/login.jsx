import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    console.log({
      email,
      senha
    })

    navigate('/home')
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login