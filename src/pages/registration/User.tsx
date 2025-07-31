import React, { useRef,useState } from 'react';
import { SuccessAlert } from '../components/alerts/SuccessAlert';
import { DangerAlert } from '../components/alerts/DangerAlert';
import { SaveButton } from '../components/buttons/SaveButton';

export const User = () => {
  const [showDanger, setShowDanger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const biirthDate = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const cpf = useRef<HTMLInputElement>(null);
  const user = useRef<HTMLInputElement>(null);
  const passWord = useRef<HTMLInputElement>(null);
  const accessLevel = useRef<HTMLSelectElement>(null);
  const department = useRef<HTMLInputElement>(null);
  const status = useRef<HTMLSelectElement>(null);

  const handleSave = () => {
    const refs = {
      name : useRef(null),
      email : useRef(null),
      biirthDate : useRef(null),
      phone : useRef(null),
      cpf : useRef(null),
      user : useRef(null),
      passWord : useRef(null),
      accessLevel : useRef(null),
      department : useRef(null),
      status : useRef(null),
    };

  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "95vh", padding: "2rem", overflowX: "hidden", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <section style={{ width: "100%", maxWidth: "64rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", padding: "2rem", boxSizing: "border-box" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>Cadastro de Usuário</h3>

          <form>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "space-between", boxSizing: "border-box" }}>
              {/* Coluna 1 */}
              <section style={{ flex: "1 1 18rem", maxWidth: "20rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h5 style={{ color: "#555" }}>Dados Pessoais</h5>
                <div>
                  <label htmlFor="nome" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="nome" ref={name} required/>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" ref={email} required/>
                </div>
                <div>
                  <label htmlFor="biirthDate" className="form-label">Data de Nascimento</label>
                  <input type="date" className="form-control" id="biirthDate" ref={biirthDate} required/>
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">phone / Celular</label>
                  <input type="text" className="form-control" id="phone" ref={phone} required/>
                </div>
                <div>
                  <label htmlFor="cpf" className="form-label">CPF</label>
                  <input type="text" className="form-control" id="cpf" ref={cpf} required/>
                </div>
              </section>

              {/* Coluna 2 */}
              <section style={{ flex: "1 1 18rem", maxWidth: "20rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h5 style={{ color: "#555" }}>Dados de Acesso</h5>
                <div>
                  <label htmlFor="user" className="form-label">Nome de usuário</label>
                  <input type="text" className="form-control" id="user" ref={user} required/>
                </div>
                <div>
                  <label htmlFor="passWord" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="passWord" ref={passWord} required/>
                </div>
                <div>
                  <label htmlFor="accessLevel" className="form-label">Nível de acesso</label>
                  <select className="form-control" id="accessLevel" defaultValue="" ref={accessLevel}>
                    <option disabled value="">Selecionar</option>
                    <option>Admin</option>
                    <option>Usuário</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="department" className="form-label">department / Setor</label>
                  <input type="text" className="form-control" id="department" ref={department} required/>
                </div>
                <div>
                  <label htmlFor="status" className="form-label">Status</label>
                  <select className="form-control" id="status" defaultValue="" ref={status}>
                    <option disabled value="">Selecionar</option>
                    <option>Ativo</option>
                    <option>Inativo</option>
                  </select>
                </div>
              </section>

              {/* Coluna 3 */}
              <section style={{ flex: "1 1 16rem", maxWidth: "18rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h5 style={{ color: "#555" }}>Permissões</h5>
                {["Cadastro", "Lançamento de dados", "Relatórios", "Administração"].map((perm, index) => (
                  <div key={index} className="form-check">
                    <input type="checkbox" className="form-check-input" id={perm} required/>
                    <label className="form-check-label" htmlFor={perm}>{perm}</label>
                  </div>
                ))}
              </section>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
              {showSuccess && <SuccessAlert text={"Cadstro feito com sucesso"}/>}
              {showDanger && <DangerAlert text={"Os campos não podem ser vazios"}/>}
              <section style={{ width: "10rem" }}>
                <SaveButton onClick={handleSave} />
              </section>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
