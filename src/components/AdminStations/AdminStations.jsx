import { useEffect } from "react"
import { getAllStations } from "../../redux/stations/stations.actions"
import { useSelector } from "react-redux"

const AdminStations = () => {
  const { stations } = useSelector((state) => state.stations);
  useEffect(() => {
    getAllStations();
  }, []);
  return (
    <div>
    <h2>Estaciones</h2>
    {stations.map((station) => {
      return (
      <div key={station._id}>
        <h3>{station.address}</h3>
      </div>
    )})
    }
    </div>
  )
}

export default AdminStations