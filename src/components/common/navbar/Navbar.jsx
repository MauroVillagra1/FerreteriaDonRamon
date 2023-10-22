import React from "react";
import "./Navbar.css";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <nav className="navbar_content">
        <section className="content_text d-flex h-100 align-items-center py-1">
          <h6 className="text-light ">Bienvenido</h6>
        </section>
        <section className="boton_navbar">
          <Button>
            <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697767947/Ferreteria/Nav/Iconos/shopping_cart_icon_172223_oqaeg7.png" alt="boton_carrito" />
            <p>Comprar</p>
          </Button>
          <Button>
            <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697768326/Ferreteria/Nav/Iconos/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782_1_ijagyk.png" alt="boton_registro" />
            <p>Registro</p>
          </Button>
        
          <Button>
            <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697768417/Ferreteria/Nav/Iconos/user_84308_tixyxf.png" alt="boton_login" />
            <p>Login</p>
          </Button>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
