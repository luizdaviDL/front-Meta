import React from "react";

export const Lineage= () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "95vh",
        padding: "2rem",
        overflowX: "hidden",
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
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            Raça / Linhagem
          </h3>

          <form>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                justifyContent: "space-around",
                boxSizing: "border-box",
              }}
            >
              {/* Coluna 1 */}
              <section
                style={{
                  flex: "1 1 20rem",
                  maxWidth: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div>
                  <label htmlFor="nomeRaca" className="form-label">
                    Nome da Raça / Linhagem
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomeRaca"
                    placeholder="Ex: Cobb 500, Ross 308, Angus"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="finalidadeProdutiva" className="form-label">
                    Finalidade Produtiva
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="finalidadeProdutiva"
                    placeholder="Ex: Corte, Postura, Leite"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cicloMedio" className="form-label">
                    Ciclo Médio (dias)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cicloMedio"
                    placeholder="Ex: 42, 365"
                    min={1}
                    required
                  />
                </div>

                 <div>
                  <label htmlFor="observacoes" className="form-label">
                    Observações
                  </label>
                  <textarea
                    className="form-control"
                    id="observacoes"
                    rows={6}
                    placeholder="Campo livre para notas, histórico etc."
                  />
                </div>
                
              </section>

              {/* Coluna 2 */}
              <section
                style={{
                  flex: "1 1 20rem",
                  maxWidth: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div>
                  <label htmlFor="rendimentoMedio" className="form-label">
                    Rendimento médio (opcional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rendimentoMedio"
                    placeholder="Ex: 2,4 kg ao abate, 280 ovos/ano"
                  />
                </div>

                <div>
                  <label htmlFor="origem" className="form-label">
                    Origem
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="origem"
                    placeholder="Ex: Comercial nacional, Importada"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="statusAtiva" className="form-label">
                    Status / Ativa?
                  </label>
                  <select className="form-control" id="statusAtiva" defaultValue="" required>
                    <option disabled value="">
                      Selecionar
                    </option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </div>
              </section>

              {/* Coluna 3 */}
              
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
              <section style={{ width: "10rem" }}>
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
