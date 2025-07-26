import React from 'react'

export const User = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
            <section style={{width:"30rem",  background:"#fafafaff"}}>
                <section>
                    Cadastro
                </section>
                <form style={{marginTop:"2rem"}}>
                    <section style={{display:"flex", gap:"2rem"}}>
                        <div className="mb-3" style={{width:"12rem"}}>
                            <label for="exampleInputEmail1" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                        </div>  
                        <div className="mb-3" style={{width:"10rem"}}>
                            <label for="exampleInputEmail1" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                        </div>  

                    </section>
                    <section style={{display:"flex", gap:"2rem"}}>
                        <div className="mb-3" style={{width:"10rem"}}>
                            <label for="exampleInputPassword1" className="form-label">Data Nascimento</label>
                            <input type="date" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3" style={{width:"10rem"}}>
                            <label for="exampleInputPassword1" className="form-label">Telefone / celular</label>
                            <input type="date" className="form-control" id="exampleInputPassword1"/>
                        </div>

                    </section>
                    <section style={{display:"flex", gap:"2rem"}}>
                        <div className="mb-3" style={{width:"10rem"}}>
                            <label for="exampleInputEmail1" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                        </div>
                        <div className="mb-3">
                        <label htmlFor="selectExample" className="form-label">Responsabilidade</label>
                            <select className="form-control" id="selectExample" defaultValue="">
                                <option disabled value="">Selecionar</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </section>




                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    </div>
  )
}
