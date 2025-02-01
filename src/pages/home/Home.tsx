import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to='/chamarusuario'>
      <p>Chamar Usuario</p>
      </Link>
        
    </div>
  )
}

export default Home

