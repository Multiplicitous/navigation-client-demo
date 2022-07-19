import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()
  function goBack(){
    navigate("/")
  }
  return (
    <>
      <h1>About</h1>
      <button onClick={goBack}>back</button>
    </>
  )
}