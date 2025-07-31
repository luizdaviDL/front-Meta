import React, { useRef, useState } from 'react';
import { SuccessAlert } from '../components/alerts/SuccessAlert';
import { DangerAlert } from '../components/alerts/DangerAlert';
import { SaveButton } from '../components/buttons/SaveButton';

export const Supplier = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const refs = {
    codigo: useRef(null),
    tipo: useRef(null),
    cnpj: useRef(null),
    cpf: useRef(null),
    identidade: useRef(null),
    razao: useRef(null),
    fantasia: useRef(null),
    fone1: useRef(null),
    email: useRef(null),
    endereco: useRef(null),
    cidade: useRef(null),
    uf: useRef(null),
    representante: useRef(null),
    representanteEmail: useRef(null),
  };

  const handleSave = (e) => {
    
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "95vh", padding: "2rem", overflowX: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <section style={{ width: "100%", maxWidth: "64rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "2rem" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>
            Fornecedor
          </h3>

          <form onSubmit={handleSave}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.6rem" }}>
              {/* Coluna 1 */}
              <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <h6>Fornecedor</h6>
                <input ref={refs.codigo} type="text" className="form-control" placeholder="Código" required/>
                <input ref={refs.tipo} type="text" className="form-control" placeholder="Tipo" required/>
                <input ref={refs.cnpj} type="text" className="form-control" placeholder="CNPJ" required/>
                <input ref={refs.cpf} type="text" className="form-control" placeholder="CPF" required/>
                <input ref={refs.identidade} type="text" className="form-control" placeholder="Identidade / IE" required/>
                <input ref={refs.razao} type="text" className="form-control" placeholder="Razão Social" required/>
                <input ref={refs.fantasia} type="text" className="form-control" placeholder="Nome Fantasia" required/>
                <label>
                  <input type="checkbox" style={{ marginRight: "0.3rem" }} required/> Integração
                </label>
              </section>

              {/* Contato */}
              <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <h6>Contato</h6>
                <input ref={refs.fone1} type="text" className="form-control" placeholder="Fone 1" required/>
                <input type="text" className="form-control" placeholder="Fone 2" required/>
                <input type="text" className="form-control" placeholder="Fax" required/>
                <input ref={refs.email} type="email" className="form-control" placeholder="Email" required/>
                <input type="text" className="form-control" placeholder="Site" required/>
              </section>

              {/* Endereço */}
              <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <h6>Endereço</h6>
                <input ref={refs.endereco} type="text" className="form-control" placeholder="Endereço" required/>
                <input type="text" className="form-control" placeholder="Bairro" required/>
                <input type="text" className="form-control" placeholder="CEP" required/>
                <input ref={refs.cidade} type="text" className="form-control" placeholder="Cidade" required/>
                <input ref={refs.uf} type="text" className="form-control" placeholder="UF" required/>
              </section>

              {/* Representante */}
              <section style={{ flex: "1 1 12rem", maxWidth: "13rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <h6>Representante</h6>
                <input ref={refs.representante} type="text" className="form-control" placeholder="Nome" required/>
                <input type="text" className="form-control" placeholder="Fone" required/>
                <input type="text" className="form-control" placeholder="Celular" required/>
                <input ref={refs.representanteEmail} type="email" className="form-control" placeholder="Email" required/>
              </section>

              {/* Bancário */}
              <section>
                <h6>Dados Bancários</h6>
                <section style={{ display: "flex", gap: "1rem" }}>
                  <input type="text" className="form-control" placeholder="Cedente" required/>
                  <input type="text" className="form-control" placeholder="Agência" required/>
                  <input type="text" className="form-control" placeholder="Conta" required/>
                  <input type="text" className="form-control" placeholder="Banco" required/>
                  <select className="form-control" defaultValue="">
                    <option disabled value="">Tipo</option>
                    <option>Conta Corrente</option>
                    <option>Poupança</option>
                  </select>
                </section>
              </section>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem", gap: "1rem", alignItems: "center" }}>
              {showSuccess && <SuccessAlert text="Cadastro feito com sucesso!" />}
              {showError && <DangerAlert text="Os campos obrigatórios não podem estar vazios." />}
              <section style={{ width: "10rem" }}>
                <SaveButton />
              </section>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
