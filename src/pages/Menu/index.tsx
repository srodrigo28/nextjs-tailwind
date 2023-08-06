import Link from "next/link";
import { Container } from "./styles";

export default function Menu(){
    return(
        <Container>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/cadastro">Cadastro</Link>
        </Container>
    )
}