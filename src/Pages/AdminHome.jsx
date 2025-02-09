import React from "react";
import { Link } from "react-router-dom";
const AdminHome = () => {
    return(
        <div className="adminhomepage">
           <Link to="/admin/tickets">Biletler</Link>
           <Link to="/admin/blogs">Blog</Link>
        </div>
    )
}
export default AdminHome