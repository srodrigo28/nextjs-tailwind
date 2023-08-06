import Link from "next/link";
import { Container } from "./styles";
import Menu from "../Menu";
import { useState } from "react";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirme, setSenhaConfirme] = useState('')
    return (
        <>
            <Menu />
            <Container>

                <form>
                    <h1>Page Cadastro</h1>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="E-mail"
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                    />

                    <input
                        type="text"
                        value={email}
                        placeholder="Digite uma senha"
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        value={senhaConfirme}
                        placeholder="Confirme a senha"
                        onChange={ e => setSenhaConfirme(e.target.value)}
                    />

                    <div className="button-group">
                        <Link href="/cadastro">
                            <button>Cadastrar</button>
                            <button>Cancelar</button>
                        </Link>
                    </div>
                </form>
            </Container>
        </>
        
    )
}