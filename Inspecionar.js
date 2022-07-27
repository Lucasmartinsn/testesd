import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

function Inspecionar() {

    const [pessoa, setpessoa] = useState([])

    useEffect(() => {
        const fetchequipe = async () => {
            try {
                const response = await fetch('https://sistema-aprendizes-brisanet-go.herokuapp.com/pessoas/');
                const data = await response.json();
                setpessoa(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchequipe();
    }, []);

    return (
        <div>
            <IconButton sx={{ color: 'white' }}>
                <Link to="/Pessoas" />
                <ArrowBackIcon />
            </IconButton>

            <main>
                <div className="card-post">
                    <h1>Perfil </h1>
                    <div className="line-post"></div>

                    <div className="body-post">
                    { pessoa.map((lucas) =>{
                        <form>

                        <div className="fields">
                            <label>Nome</label>
                            <input type="text" name="nome_pessoa"  />
                            <p className="error-message"> </p>
                        </div>

                        <div className="fields">
                            <label>Função</label>
                            <input type="text" name="funcao_pessoa"  />
                            <p className="error-message"> </p>
                        </div>

                       
                        <div className="btn-post">
                            <button type="submit">Sair</button>
                        </div>
                    </form>

                    })
                        
}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Inspecionar;

