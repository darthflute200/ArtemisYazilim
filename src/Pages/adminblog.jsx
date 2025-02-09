import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminBlogs = () =>{
  const navigation = useNavigate();
  const [blogs , SetBlogs] = useState();
  const getblogs = async() =>{
      try{
          const response = await fetch("http://127.0.0.1:8080/api/allblogs" , {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
            }
          )
          const data = await response.json();
          SetBlogs(data)
      }
      catch(error){
        console.log(error)
      }
  }
  useEffect(() =>{
    getblogs();
  },[])
    return(
        <div className="adminticketsmain">
            <h2>Bloglar</h2>
            <div className="input-container">
                <input type="text"/>
                <input type="date"/>
                <button className="input-search">
                    ara
                </button>
                <button onClick={() => navigation("/admin/blogs/create")} class="btn btn-primary">Blog Oluştur</button>
            </div>
            <div className="table-div">
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Başlık</th>
      <th scope="col">Tarih</th>
      <th scope="col">Sil</th>
      <th scope="col">Detay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li className="page-item"><a class="page-link" href="#">Previous</a></li>
    <li className="page-item"><a class="page-link" href="#">1</a></li>
    <li className="page-item"><a class="page-link" href="#">2</a></li>
    <li className="page-item"><a class="page-link" href="#">3</a></li>
    <li className="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </div>
    )
}
export default AdminBlogs