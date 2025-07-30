import React from 'react';
import { SuccessAlert } from '../alerts/SuccessAlert';

export const User = () => {
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
            Cadastro de Usuário
          </h3>

          <form>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                justifyContent: "space-between",
                boxSizing: "border-box"
              }}
            >
              {/* Coluna 1 */}
              <section style={{ flex: "1 1 18rem", maxWidth: "20rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h5 style={{ color: "#555" }}>Dados Pessoais</h5>
                <div>
                  <label htmlFor="nome" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="nome" />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div>
                  <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                  <input type="date" className="form-control" id="dataNascimento" />
                </div>
                <div>
                  <label htmlFor="telefone" className="form-label">Telefone / Celular</label>
                  <input type="text" className="form-control" id="telefone" />
                </div>
                <div>
                  <label htmlFor="cpf" className="form-label">CPF</label>
                  <input type="text" className="form-control" id="cpf" />
                </div>
              </section>

              {/* Coluna 2 */}
              <section style={{ flex: "1 1 18rem", maxWidth: "20rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h5 style={{ color: "#555" }}>Dados de Acesso</h5>
                <div>
                  <label htmlFor="usuario" className="form-label">Nome de usuário</label>
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <div>
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="senha" />
                </div>
                <div>
                  <label htmlFor="nivelAcesso" className="form-label">Nível de acesso</label>
                  <select className="form-control" id="nivelAcesso" defaultValue="">
                    <option disabled value="">Selecionar</option>
                    <option>Admin</option>
                    <option>Usuário</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="departamento" className="form-label">Departamento / Setor</label>
                  <input type="text" className="form-control" id="departamento" />
                </div>
                <div>
                  <label htmlFor="status" className="form-label">Status</label>
                  <select className="form-control" id="status" defaultValue="">
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
                    <input type="checkbox" className="form-check-input" id={perm} />
                    <label className="form-check-label" htmlFor={perm}>{perm}</label>
                  </div>
                ))}
              </section>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
                <SuccessAlert/>
              <section style={{ width:"10rem"}}>
                    <button type="submit" className="btn btn-primary px-4 py-2">
                    Salvar
                    </button>
              </section>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
