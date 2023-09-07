import { Link, useNavigate } from "react-router-dom";
import Logout from "../logout";

function AdminDashboard() {
  const navigate = useNavigate();

  return (<>
    <div style={{ marginTop: "150px" }} >
      <div className="container" >
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",justifyContent:"space-around", textAlign:"center" }}>
          <div class="card text-bg-light mb-3">
            <div class="card-header">
              <h1>Manage Books</h1>
            </div>
            <div class="card-body" style={{ textAlign: "center" }}>
              <div><Link to="/adminShowBooks" class="btn btn-primary">Show All Books</Link></div><hr />
              <div><Link to="/adminAddBook" class="btn btn-success">Add Book</Link></div><hr />
              <div><Link to="/adminShowBooks" class="btn btn-info">Update Book</Link></div><hr />
              <div><Link to="/adminShowBooks" class="btn btn-danger">Delete Book</Link></div>
            </div>
          </div>
          <div class="card text-bg-light mb-3">
            <div class="card-header">
              <h1>Manage Orders</h1>
            </div>
            <div class="card-body" style={{ textAlign: "center" }}>
              <div><Link to="#" class="btn btn-primary">Show All Orders</Link></div><hr />
              <div><Link to="#" class="btn btn-success">Confirm Order</Link></div><hr />
              <div><Link to="#" class="btn btn-info">Reject Order</Link></div><hr />
              <div><Link to="#" class="btn btn-danger">Delivery Status</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>);
}

export default AdminDashboard;