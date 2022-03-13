import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <div className="navbar container-fluid d-flex justify-content-between align-items-center">
        <div className="nav__links d-flex ml-5">
          <div className="nav-link border-bottom-0 rounded-top border-getir">
            <h5 className="text-warning">getir</h5>
          </div>
          <div className="nav-link border-bottom-0 rounded-top border--getir ml-1">
            <h5 className="">getiryemek</h5>
          </div>
          <div className="nav-link border-bottom-0 rounded-top border--getir">
            <h5 className="">getirbüyük</h5>
          </div>
          <div className="nav-link border-bottom-0 rounded-top border--getir">
            <h5 className="">getirsu</h5>
          </div>
          <div className="nav-link border-bottom-0 rounded-top border--getir">
            <h5 className="">getirçarşı</h5>
          </div>
        </div>
        <div className=" nav__login d-flex mb-1 mr-5">
          <div className="login-box">
            <i className="fa-solid fa-globe"></i>
            <span className="ml-2">Türkçe(TR)</span>
          </div>
          <div className="login-box">
            <i className="fa-solid fa-user"></i>
            <span className="ml-2">Giriş Yap</span>
          </div>
          <div className="login-box">
            <i className="fa-solid fa-user-plus"></i>
            <span className="ml-2">Kayıt Ol</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
