import React, { useRef, useState } from 'react';
import { SaveButton } from "../components/buttons/SaveButton";
import { SuccessAlert } from "../components/alerts/SuccessAlert";
import { DangerAlert } from "../components/alerts/DangerAlert";

export const Lineage= () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [mensageError, setMensageError] = useState(false);
  const [mensageSuccess, setMensageSuccess] = useState(false);
  

  const refs = {
    name: useRef(null),
    productivePurpose: useRef(null),
    mediumCycle: useRef(null),
    observation: useRef(null),
    averageYield: useRef(null),
    origin: useRef(null),
    status: useRef(null),
  };


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
                  <label htmlFor="name" className="form-label">
                    Nome da Raça / Linhagem
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={refs.name}                    
                    placeholder="Ex: Cobb 500, Ross 308, Angus"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="productivePurpose" className="form-label">
                    Finalidade Produtiva
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={refs.productivePurpose}
                    placeholder="Ex: Corte, Postura, Leite"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mediumCycle" className="form-label">
                    Ciclo Médio (dias)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    ref={refs.mediumCycle}
                    placeholder="Ex: 42, 365"
                    min={1}
                    required
                  />
                </div>

                 <div>
                  <label htmlFor="observation" className="form-label">
                    Observações
                  </label>
                  <textarea
                    className="form-control"
                    id="observation"
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
                  <label htmlFor="averageYield" className="form-label">
                    Rendimento médio (opcional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={refs.averageYield}
                    placeholder="Ex: 2,4 kg ao abate, 280 ovos/ano"
                  />
                </div>

                <div>
                  <label htmlFor="origin" className="form-label">
                    origin
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={refs.origin}
                    placeholder="Ex: Comercial nacional, Importada"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="status" className="form-label">
                    Status / Ativa?
                  </label>
                  <select className="form-control" ref={refs.status} defaultValue="" required>
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
              {showSuccess && <SuccessAlert text={mensageError}/>} 
              {showError && <DangerAlert text={mensageSuccess}/>} 
              <section style={{ width: "10rem" }}>
                <SaveButton/>
              </section>
              
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
