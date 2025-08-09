import React, { useRef } from 'react';
import { SaveButton } from '../components/buttons/SaveButton';

export const Event = () => {

  const refs = {
    codeAbbreviation: useRef(null),
    eventName: useRef(null),
    associatedSectorDepartment: useRef(null),
    description: useRef(null),
    relatedSpecies: useRef(null),
    activeStatus: useRef(null),
    notes: useRef(null),
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
            maxWidth: "48rem",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>
            Registro de Evento
          </h3>

          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                boxSizing: "border-box",
              }}
            >
              <div>
                <label className="form-label">Código / Sigla</label>
                <input type="text" className="form-control" ref={refs.codeAbbreviation} placeholder="Ex: EVT001" required />
              </div>

              <div>
                <label className="form-label">Nome do Evento</label>
                <input type="text" className="form-control" ref={refs.eventName} placeholder="Ex: Reunião Anual" required />
              </div>

              <div>
                <label className="form-label">Setor / Departamento Associado</label>
                <select className="form-control" ref={refs.associatedSectorDepartment} defaultValue="" required>
                  <option disabled value="">Selecionar</option>
                  <option>Recursos Humanos</option>
                  <option>Financeiro</option>
                  <option>Marketing</option>
                  <option>Operações</option>
                  <option>TI</option>
                </select>
              </div>

              <div>
                <label className="form-label">Descrição</label>
                <textarea className="form-control" ref={refs.description} placeholder="Detalhes sobre o evento" />
              </div>

              <div>
                <label className="form-label">Espécies Relacionadas (opcional)</label>
                <input type="text" className="form-control" ref={refs.relatedSpecies} placeholder="Ex: Aves, Suínos" />
              </div>

              <div>
                <label className="form-label">Status Ativo</label>
                <select className="form-control" ref={refs.activeStatus} defaultValue="">
                  <option disabled value="">Selecionar</option>
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div>

              <div>
                <label className="form-label">Observações</label>
                <textarea className="form-control" ref={refs.notes} placeholder="Informações adicionais" />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
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
