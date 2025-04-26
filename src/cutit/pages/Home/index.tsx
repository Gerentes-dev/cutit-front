import { useEffect } from "react"
import { getData } from "../../services";

export const Home = () => {

  useEffect(() => {
    getData();
      
  }, [])
  
  return (
    <div>Home</div>
  )
}
