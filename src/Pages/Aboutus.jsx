import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const Aboutus = () =>{
    return(
        <div className="Blog-pages-container">
        <div className="Blog-pages-first-container">
            <Header/>
            <h3 className="blogs-h3">Neden Artemis?</h3>
            <p className="artemis-about-us">Artemis Yazılım olarak, işinizin dijital dünyada hak ettiği yere ulaşması için yenilikçi, güvenilir ve müşteri odaklı çözümler sunuyoruz. Yılların verdiği tecrübe ve sektördeki en son teknolojilere olan hakimiyetimizle, projelerinize değer katmayı hedefliyoruz. Müşteri memnuniyetini her zaman önceliğimiz olarak görüyor, ihtiyaçlarınıza özel çözümler geliştiriyor ve projelerinizin her aşamasında yanınızda oluyoruz. Teknolojiyi sizin avantajınıza çevirmek için yenilikçi fikirlerimizi hayata geçiriyor, projelerinizi zamanında ve yüksek kalite standartlarında teslim ederek hızlı ve güvenilir bir hizmet sağlıyoruz. Kaliteli hizmetlerimizi uygun fiyatlarla sunarken, bütçenizi koruyarak yatırımlarınızdan en yüksek verimi almanızı sağlıyoruz. Ayrıca, projeniz tamamlandıktan sonra da 7/24 teknik destek sunarak, her zaman yanınızda olmaya devam ediyoruz. Artemis Yazılım ile başarıya giden yolda güvenle ilerleyin.</p>
        </div>
        <Footer/>
    </div>
    )
}
export default Aboutus;