import React from 'react';

export const Supplier= () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "95vh",
        padding: "2rem",
        overflowX: "hidden", // bloqueia rolagem horizontal
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <section
          style={{
            width: "100%",
            maxWidth: "64rem",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
            boxSizing: "border-box"
          }}
        >
        
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>
            Fornecedor
          </h3>

          <form>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "0.6rem",
                  boxSizing: "border-box"
                }}
              >
                {/* Coluna 1 - Fornecedor */}
                <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <h6 style={{ marginBottom: "0.3rem" }}>Fornecedor</h6>
                  <input type="text" className="form-control" placeholder="Código" />
                  <input type="text" className="form-control" placeholder="Tipo" />
                  <input type="text" className="form-control" placeholder="CNPJ" />
                  <input type="text" className="form-control" placeholder="CPF" />
                  <input type="text" className="form-control" placeholder="Identidade / IE" />
                  <input type="text" className="form-control" placeholder="Razão Social" />
                  <input type="text" className="form-control" placeholder="Nome Fantasia" />
                  <label>
                    <input type="checkbox" id="integracao" style={{ marginRight: "0.3rem" }} /> Integração
                  </label>
                </section>

                {/* Coluna 2 - Contato */}
                <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <h6 style={{ marginBottom: "0.3rem" }}>Contato</h6>
                  <input type="text" className="form-control" placeholder="Fone 1" />
                  <input type="text" className="form-control" placeholder="Fone 2" />
                  <input type="text" className="form-control" placeholder="Fax" />
                  <input type="email" className="form-control" placeholder="Email" />
                  <input type="text" className="form-control" placeholder="Site" />
                </section>

                {/* Coluna 3 - Endereço */}
                <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <h6 style={{ marginBottom: "0.3rem" }}>Endereço</h6>
                  <input type="text" className="form-control" placeholder="Endereço" />
                  <input type="text" className="form-control" placeholder="Bairro" />
                  <input type="text" className="form-control" placeholder="CEP" />
                  <input type="text" className="form-control" placeholder="Cidade" />
                  <input type="text" className="form-control" placeholder="UF" />
                </section>

                {/* Coluna 4 - Representante */}
                <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <h6 style={{ marginBottom: "0.3rem" }}>Representante</h6>
                  <input type="text" className="form-control" placeholder="Nome" />
                  <input type="text" className="form-control" placeholder="Fone" />
                  <input type="text" className="form-control" placeholder="Celular" />
                  <input type="email" className="form-control" placeholder="Email" />
                </section>

                {/* Coluna 5 - Dados Bancários */}
                <section >
                  <h6 style={{ marginBottom: "0.3rem" }}>Dados Bancários</h6>
                  <section style={{display:"flex", gap:"1rem"}}>
                    <input type="text" className="form-control" placeholder="Cedente" />
                    <input type="text" className="form-control" placeholder="Agência" />
                    <input type="text" className="form-control" placeholder="Conta" />
                    <input type="text" className="form-control" placeholder="Banco" />
                    <select className="form-control" defaultValue="">
                      <option disabled value="">Tipo</option>
                      <option>Conta Corrente</option>
                      <option>Poupança</option>
                    </select>
                  </section>
                </section>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
                <button type="submit" className="btn btn-primary px-3 py-2">Salvar</button>
              </div>
          </form>
        </section>
      </div>
    </div>
  );
};
