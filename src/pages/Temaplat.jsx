import React, { useState } from "react";
import { User } from "./user/User";
import { Outlet, useLocation, useNavigate} from 'react-router-dom';

export const Temaplat = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Cadastro");
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const routeMap = {
    "Usuários": "/cadastro",
    "Produtos": "/produtos",
    "Clientes": "/clientes",
    "Relatórios": "/relatorios",
    // ...adicione o que quiser
  };


  const navItems = [
    {
      label: "Cadastro",
      submenu: [
        "Usuários",
        "Tipo de Lote",
        "Espécie",
        "Raça / Linhagem",
        "Tipo de Ração",
        "Tipo de Vacina",
        "Tipo de Evento",        
        "Responsável Técnico",
        "Integrado / Produtor",
        "Setor",
        "Tipo de Produto",
        "Classificação de Carcaça",
        "Unidade de Medida",
        "Motivo de Baixa",
        "Fornecedor"
      ]

    },
    {
      label: "Incubatório",
      submenu: ["Lote", "Custos", "Relatórios"],
    },
    {
      label: "Integração",
      submenu: ["Lote", "Custos", "Relatórios"],
    },
    {
      label: "Ração",
      submenu: ["Estoque", "Pedidos", "Fornecedores"],
    },
  ];

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ margin: 0, padding: 0 }}
      >
        <div className="container-fluid" style={{ background: "#2E9AB2" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navItems.map(({ label, submenu }) => (
                <li
                  key={label}
                  className={`nav-item dropdown ${
                    activeItem === label ? "active" : ""
                  }`}
                  style={{ marginRight: "0.5rem" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id={`${label}-dropdown`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setActiveItem(label)}
                    style={{
                      background: activeItem === label ? "#145c6e" : "transparent",
                      color: "#FFFFFF",
                      borderRadius: "5px",
                    }}
                  >
                    {label}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`${label}-dropdown`}
                    style={{columnCount:"3"}}
                  >
                  {submenu.map((subItem) => (
                    <li key={subItem}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          setSelectedSubItem(subItem);
                          
                          const path = routeMap[subItem];
                          if (path) {
                            navigate(path); // navega para o caminho definido
                          }
                        }}
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}


                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <section
            style={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <img style={{ width: "2rem", height: "2rem" }} src="./boy.png" alt="" />
            <div className="dropdown" style={{ position: "relative" }}>
              <button
                className="btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "none" }}
              >
                <img
                  style={{ width: "1.5rem", height: "1.5rem", marginTop: ".1rem" }}
                  src="./down.png"
                  alt=""
                />
              </button>
              <ul
                className="dropdown-menu"
                style={{
                  left: "auto",
                  right: "0",
                  top: "100%",
                  marginTop: ".5rem",
                }}
              >
                <li>
                  <span className="dropdown-item-text" style={{ background: "#eef6faff" }}>
                    Usuario: luiz
                  </span>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
      <div style={{ overflowX: "hidden" }}>
          <Outlet/>
      </div>
    </div>
  );
};
