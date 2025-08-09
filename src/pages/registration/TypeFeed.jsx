import React, { useRef, useState } from 'react';
import { SaveButton } from '../components/buttons/SaveButton';

export const TypeFeed = () => {

  const refs = {
    name: useRef(null),
    description: useRef(null),
    purpose: useRef(null),
    ativo: useRef(null),
    category: useRef(null),
    band: useRef(null),
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
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>
            Tipo de Ração
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
                <h5 style={{ color: "#555" }}>Informações Básicas</h5>

                <div>
                  <label htmlFor="name" className="form-label">Nome do tipo de lote</label>
                  <input type="text" className="form-control" ref={refs.name} placeholder="Ex: Matrizes" required/>
                </div>

                <div>
                  <label htmlFor="description" className="form-label">Descrição</label>
                  <textarea type="text" className="form-control" ref={refs.description} placeholder="Ex: Lotes de frangos prontos para abate" />
                </div>

                <div>
                  <label htmlFor="purpose" className="form-label">Finalidade</label>
                  <input type="text" className="form-control" ref={refs.purpose} placeholder="Ex: Reprodução, Engorda" required/>
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
                <h5 style={{ color: "#555" }}>Configurações</h5>

                <div>
                  <label htmlFor="ativo" className="form-label">Ativo?</label>
                  <select className="form-control" ref={refs.ativo} defaultValue="">
                    <option disabled value="">Selecionar</option>
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className="form-label">Categoria (opcional)</label>
                  <input type="text" className="form-control" ref={refs.category} placeholder="Ex: Aves, Suínos" required/>
                </div>

                <div>
                  <label htmlFor="band" className="form-label">Faixa-etária esperada</label>
                  <input type="text" className="form-control" ref={refs.band} placeholder="Ex: 1 a 45 dias" required/>
                </div>
              </section>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
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
