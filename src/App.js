import "./App.css";
import Banner from "./components/Banner";
import Campaigns from "./components/Campaigns";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
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
  const campaigns = [
    { src: "/assets/images/kampanya-1.jpeg" },
    { src: "/assets/images/kampanya-2.jpeg" },
  ];
  const favorites = [
    {
      src: "/assets/images/su.jpeg",
      price: "₺3.95",
      title: "Kuzeyden",
      count: "1.5L",
    },
    {
      src: "/assets/images/soda.jpeg",
      price: "₺7.75",
      title: "Kızılay Erzincan",
      count: "6 x 200 ml",
    },
    {
      src: "/assets/images/ulker.jpeg",
      price: "₺4,40",
      title: "Ülker Napoliten",
      count: "33 g",
    },
    {
      src: "/assets/images/cips.jpeg",
      price: "₺8,95",
      title: "Lay's Mevsim Yeşillikli",
      count: "96 g",
    },
    {
      src: "/assets/images/cekirdek.jpeg",
      price: "₺9,85",
      title: "Kavrulmuş Siyah Ay Çekirdeği",
      count: "180 g",
    },
    {
      src: "/assets/images/magnum.jpeg",
      price: "₺11,50",
      title: "Magnum Badem",
      count: "100 ml",
    },
    {
      src: "/assets/images/uno.jpeg",
      price: "₺10,95",
      title: "Uno Tost Ekmeği",
      count: "350 g",
    },
    {
      src: "/assets/images/sut.jpeg",
      price: "₺12,95",
      title: "İçim %3 Yağlı Süt",
      count: "1 L",
    },
    {
      src: "/assets/images/su.jpeg",
      price: "₺3.95",
      title: "Kuzeyden",
      count: "1.5L",
    },
    {
      src: "/assets/images/soda.jpeg",
      price: "₺7.75",
      title: "Kızılay Erzincan",
      count: "6 x 200 ml",
    },
    {
      src: "/assets/images/ulker.jpeg",
      price: "₺4,40",
      title: "Ülker Napoliten",
      count: "33 g",
    },
    {
      src: "/assets/images/cips.jpeg",
      price: "₺8,95",
      title: "Lay's Mevsim Yeşillikli",
      count: "96 g",
    },
    {
      src: "/assets/images/cekirdek.jpeg",
      price: "₺9,85",
      title: "Kavrulmuş Siyah Ay Çekirdeği",
      count: "180 g",
    },
    {
      src: "/assets/images/magnum.jpeg",
      price: "₺11,50",
      title: "Magnum Badem",
      count: "100 ml",
    },
    {
      src: "/assets/images/uno.jpeg",
      price: "₺10,95",
      title: "Uno Tost Ekmeği",
      count: "350 g",
    },
    {
      src: "/assets/images/sut.jpeg",
      price: "₺12,95",
      title: "İçim %3 Yağlı Süt",
      count: "1 L",
    },
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
      <div className="container">
        <div className="row">
          <h6>Kampanyalar</h6>
        </div>
        <div className="row">
          {campaigns.map((campaign) => (
            <Campaigns src={campaign.src} />
          ))}
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <h6>Favoriler</h6>
        </div>
        <div className="row">
          {favorites.map((favorite) => (
            <Favorites
              src={favorite.src}
              price={favorite.price}
              title={favorite.title}
              count={favorite.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
