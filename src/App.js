import "./App.css";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Nav from "./components/Nav";

function App() {
  const categories = [
    { src: "/assets/images/yeni_urunler.jpeg", title: "Yeni Ürünler" },
    { src: "/assets/images/indirimler.jpeg", title: "İndirimler" },
    { src: "/assets/images/icecek.jpeg", title: "Su & İçecek" },
    { src: "/assets/images/meyvesebze.jpeg", title: "Meyve & Sebze" },
    { src: "/assets/images/firin.jpeg", title: "Fırından" },
    { src: "/assets/images/temel.jpeg", title: "Temel Gıda" },
    { src: "/assets/images/atistirma.jpeg", title: "Atıştırmalık" },
    { src: "/assets/images/dondurma.jpeg", title: "Dondurma" },
    { src: "/assets/images/sut_urunleri.jpeg", title: "Süt Ürünleri" },
    { src: "/assets/images/kahvaltilik.jpeg", title: "Kahvaltılık" },
    { src: "/assets/images/yiyecek.jpeg", title: "Yiyecek" },
    { src: "/assets/images/fit.jpeg", title: "Fit & Form" },
    { src: "/assets/images/kisiselbakim.jpeg", title: "Kişisel Bakım" },
    { src: "/assets/images/evbakim.jpeg", title: "Ev Bakım" },
    { src: "/assets/images/evyasam.jpeg", title: "Ev & Yaşam" },
    { src: "/assets/images/teknoloji.jpeg", title: "Teknoloji" },
    { src: "/assets/images/hayvan.jpeg", title: "Evcil Hayvan" },
    { src: "/assets/images/bebek.jpeg", title: "Bebek" },
    { src: "/assets/images/cinsel.jpeg", title: "Cinsel Sağlık" },
  ];

  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="container mt-4">
        <div className="row">
          <h6>Kategoriler</h6>
        </div>
        <div className="row">
          {categories.map((category) => (
            <Categories src={category.src} title={category.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
