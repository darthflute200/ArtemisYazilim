import React from "react";
const AdminSignin = () => {
    return(
        <div className="adminsignin-main">
            <h1>Admin Girişi</h1>
            <input type="text" placeholder="email"/>
            <input type="text"placeholder="parola"/>
            <button>Giriş Yap</button>
        </div>
    )
}
export default AdminSignin