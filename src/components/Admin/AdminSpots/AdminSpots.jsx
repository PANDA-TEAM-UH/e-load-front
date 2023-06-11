import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAllSpots } from "../../../redux/spots/spots.actions";

const AdminSpots = () => {
    const { spots } = useSelector((state) => state.spots);
    useEffect(() => {
        getAllSpots();
    }, []);
    return (
        <div>
        <h2>Puntos de Carga</h2>
        {spots.map((spot) => {
          return (
          <div key={spot._id}>
            <p>{spot.power}</p>
            <p>{spot.type}</p>
            <p>{spot.rate}</p>
            <p>{spot.state}</p>
          </div>
        )})
        }
        </div>
      )
}

export default AdminSpots