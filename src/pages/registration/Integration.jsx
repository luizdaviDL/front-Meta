import React, { useRef } from 'react';
import { SaveButton } from '../components/buttons/SaveButton';

export const Integration = () => {

  const refs = {
    fullNameCompany: useRef(null),
    cpfTaxId: useRef(null),
    address: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    housingCapacity: useRef(null),
    typeIntegration: useRef(null),
    linkedTechnicalResponsible: useRef(null),
    statusActiveInactive: useRef(null),
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
                <label className="form-label">Nome completo / Nome da empresa</label>
                <input
                  type="text"
                  className="form-control"
                  ref={refs.fullNameCompany}
                  placeholder="Ex: João Silva ou AgroTech Ltda"
                  required
                />
              </div>

              <div>
                <label className="form-label">CPF / CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  ref={refs.cpfTaxId}
                  placeholder="Ex: 000.000.000-00 ou 00.000.000/0001-00"
                  required
                />
              </div>

              <div>
                <label className="form-label">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  ref={refs.address}
                  placeholder="Ex: Rua das Flores, 123"
                  required
                />
              </div>

              <div>
                <label className="form-label">Telefone</label>
                <input
                  type="tel"
                  className="form-control"
                  ref={refs.phone}
                  placeholder="Ex: (11) 99999-9999"
                  required
                />
              </div>

              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  ref={refs.email}
                  placeholder="Ex: contato@empresa.com"
                  required
                />
              </div>

              <div>
                <label className="form-label">Capacidade Habitacional</label>
                <input
                  type="number"
                  className="form-control"
                  ref={refs.housingCapacity}
                  placeholder="Ex: 1000"
                  required
                />
              </div>

              <div>
                <label className="form-label">Tipo de Integração</label>
                <input
                  type="text"
                  className="form-control"
                  ref={refs.typeIntegration}
                  placeholder="Ex: Integração Total, Parcial"
                  required
                />
              </div>

              <div>
                <label className="form-label">Responsável Técnico Vinculado</label>
                <select className="form-control" ref={refs.linkedTechnicalResponsible} defaultValue="" required>
                  <option disabled value="">Selecionar</option>
                  <option>Dr. João Silva</option>
                  <option>Dra. Maria Souza</option>
                  <option>Eng. Carlos Pereira</option>
                  <option>Eng. Ana Lima</option>
                </select>
              </div>

              <div>
                <label className="form-label">Status (Ativo/Inativo)</label>
                <select className="form-control" ref={refs.statusActiveInactive} defaultValue="" required>
                  <option disabled value="">Selecionar</option>
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div>

              <div>
                <label className="form-label">Observações</label>
                <textarea
                  className="form-control"
                  ref={refs.notes}
                  placeholder="Informações adicionais"
                />
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
