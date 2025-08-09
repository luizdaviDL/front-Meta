import React, { useRef } from 'react';
import { SaveButton } from '../components/buttons/SaveButton';

export const Vaccine = () => {

  const refs = {
    codeAbbreviation: useRef(null),
    vaccineName: useRef(null),
    targetDisease: useRef(null),
    associatedSpecies: useRef(null),
    routeOfAdministration: useRef(null),
    recommendedAge: useRef(null),
    standardDose: useRef(null),
    supplierManufacturer: useRef(null),
    revaccinationInterval: useRef(null),
    statusActive: useRef(null),
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
            maxWidth: "64rem",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "2rem", color: "#333" }}>
            Vacinas
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
              {/* Column 1 */}
              <section
                style={{
                  flex: "1 1 20rem",
                  maxWidth: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <h5 style={{ color: "#555" }}>Basic Information</h5>

                <div>
                  <label className="form-label">Code / Abbreviation</label>
                  <input type="text" className="form-control" ref={refs.codeAbbreviation} placeholder="Ex: VAC001" required />
                </div>

                <div>
                  <label className="form-label">Vaccine Name</label>
                  <input type="text" className="form-control" ref={refs.vaccineName} placeholder="Ex: Vacina contra Gripe Aviária" required />
                </div>

                <div>
                  <label className="form-label">Target Disease</label>
                  <input type="text" className="form-control" ref={refs.targetDisease} placeholder="Ex: Gripe Aviária" required />
                </div>

                <div>
                  <label className="form-label">Associated Species</label>
                  <input type="text" className="form-control" ref={refs.associatedSpecies} placeholder="Ex: Aves, Suínos" required />
                </div>

                <div>
                  <label className="form-label">Route of Administration</label>
                  <input type="text" className="form-control" ref={refs.routeOfAdministration} placeholder="Ex: Intramuscular, Oral" required />
                </div>

                <div>
                  <label className="form-label">Recommended Age (days)</label>
                  <input type="text" className="form-control" ref={refs.recommendedAge} placeholder="Ex: 1 a 45" required />
                </div>
              </section>

              {/* Column 2 */}
              <section
                style={{
                  flex: "1 1 20rem",
                  maxWidth: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <h5 style={{ color: "#555" }}>Settings</h5>

                <div>
                  <label className="form-label">Standard Dose</label>
                  <input type="text" className="form-control" ref={refs.standardDose} placeholder="Ex: 2ml" required />
                </div>

                <div>
                  <label className="form-label">Supplier / Manufacturer</label>
                  <input type="text" className="form-control" ref={refs.supplierManufacturer} placeholder="Ex: AgroNutri" />
                </div>

                <div>
                  <label className="form-label">Revaccination Interval</label>
                  <input type="text" className="form-control" ref={refs.revaccinationInterval} placeholder="Ex: 21 dias" />
                </div>

                <div>
                  <label className="form-label">Status / Active?</label>
                  <select className="form-control" ref={refs.statusActive} defaultValue="">
                    <option disabled value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" ref={refs.notes} placeholder="Informações adicionais" />
                </div>
              </section>
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
