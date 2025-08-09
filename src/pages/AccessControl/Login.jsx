import React from 'react'

export const Login = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"12rem"}}>
        <section style={{width:"25rem", background:"#ffffffff"}}>
            <section style={{display:"flex", justifyContent:"center", marginBottom:"2rem"}}>
                <h1>Flex-Data</h1>
            </section>
            <section style={{display:"flex", justifyContent:"center", marginBottom:"2rem"}}>
                <h4 style={{color:"#137991ff"}}>boas vindas</h4>
            </section>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ex: soap@gail.com'
                    style={{
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // sombra leve
                        border: "1px solid #ced4da"
                    }}/>                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='ex: 123'
                    style={{
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // sombra leve
                        border: "1px solid #ced4da"
                    }}/>     
                </div>
                <section style={{display:"flex", justifyContent:"center"}}>
                    <button style={{width:"23rem"}} type="submit" class="btn btn-primary">Acessar</button>
                </section>
                <div class="mb-3 form-check" style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>                    
                    <a style={{textDecoration:"none"}} href="">esqueceu senha ?</a>
                </div>
            </form>
        </section>
    </div>
  )
}
