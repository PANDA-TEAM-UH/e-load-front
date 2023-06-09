import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../redux/users/users.actions";


const AdminUsers = () => {
    const { users } = useSelector((state) => state.users);
    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <div>
        <h2>Usuarios</h2>
        {users.map((user) => {
          return (
          <div key={user._id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.name}</p>
            <p>{user.surnames}</p>
            <p>{user.points}</p>
            <p>{user.rol}</p>
          </div>
        )})
        }
        </div>
      )
}

export default AdminUsers