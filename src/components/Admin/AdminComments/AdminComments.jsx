import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllComments } from "../../../redux/comments/comments.actions";

const AdminComments = () => {
    const { comments } = useSelector((state) => state.comments);
    useEffect(() => {
        getAllComments();
    }, []);
    return (
        <div>
        <h2>Comentarios</h2>
        {comments.map((comment) => {
          return (
          <div key={comment._id}>
            <p>{comment.user}</p>
            <p>{comment.body}</p>
            <p>{comment.createdAt}</p>
          </div>
        )})
        }
        </div>
      )
}

export default AdminComments