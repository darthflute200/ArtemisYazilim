import React, { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [base64Image, setImage] = useState(null);
    const [text, setText] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result); 
            };
        }
    };

    const saveblog = async () => {

        const blogData = {
            title, 
            subtitle, 
            base64Image,
            text
        };
        console.log(blogData)
        try {
            const response = await fetch("http://127.0.0.1:8080/api/createblog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogData),
            });
            const data = await response.json();

            if (response.ok) {
                alert("Blog başarıyla kaydedildi!");
                setTitle("");
                setSubTitle("");
                setImage(null);
                setText("");
            } else {
                alert("Blog kaydedilirken hata oluştu: " + data.message);
            }
        } catch (error) {
            console.error("Hata:", error);
            alert("Sunucuya bağlanırken bir hata oluştu.");
        }
    };

    return (
        <div className="BlogMain-Div">
            <h1>Blog Oluştur</h1>
            <div className="Blog-Create-Form">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Başlık</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Başlık"
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="subTitle" className="form-label">Alt Başlık</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="subTitle" 
                        placeholder="Alt Başlık"
                        onChange={(e) => setSubTitle(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Resim</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="formFile"
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Blog İçeriği</label>
                    <textarea 
                        className="form-control" 
                        id="text" 
                        rows="3"
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>

                <button className="btn btn-primary" onClick={saveblog}>
                    Blogu Kaydet
                </button>
            </div>
        </div>
    );
};

export default CreateBlog;

