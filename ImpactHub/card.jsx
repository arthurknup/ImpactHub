function Card({ titulo, valor }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '220px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <h3>{titulo}</h3>

      <p
        style={{
          fontSize: '24px',
          marginTop: '10px'
        }}
      >
        R$ {valor}
      </p>
    </div>
  )
}

export default Card