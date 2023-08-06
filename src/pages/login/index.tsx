import { useState } from "react";
import { Container } from "./styles";
import Link from "next/link";
import Menu from "../Menu";

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <>
            <Menu />
            <Container>
                
                <form>
                <h1>Page Login</h1>
                    <input
                        type="password"
                        value={senha}
                        onChange={ e => setSenha(e.target.value)}
                    />

                    <input
                        type="text"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <div className="button-group">
                        <Link href="/">
                            <button>Entrar</button>
                        </Link>
                        <Link href="/cadastro">
                            <button>Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </Container>
        </>
       
    )

}