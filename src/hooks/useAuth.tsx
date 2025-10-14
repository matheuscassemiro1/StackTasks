import { useState } from "react"

type LoggedUser = {
    nome: string,
    login: string
}

type User = {
    nome: string,
    login: string,
    senha: string
}

type Resposta = {
    sucesso: boolean,
    mensagem: string
}

export function useAuth() {
    const [authenticatedUser, setAuthenticatedUser] = useState<LoggedUser | undefined>();
    const [users, setUsers] = useState<User[]>([]);

    function createUser(user: User): Resposta {
        if (!users.find(u => u.login === user.login)) {
            setUsers((previous) => ([...previous, user]))
            return { sucesso: true, mensagem: "O usuário foi criado." }
        } {
            return { sucesso: false, mensagem: "O usuário já existe." }
        }
    }

    function login(login: string, senha: string): Resposta {
        const check = users.find(u => u.login === login && u.senha === senha);
        if (check) {
            setAuthenticatedUser(
                {
                    nome: check.nome,
                    login: check.login
                }
            )
            return { sucesso: true, mensagem: "Logado com sucesso." }
        } else {
            return { sucesso: false, mensagem: "Usuário ou senha incorreta" }
        }
    }

    function logout() {
        setAuthenticatedUser(undefined);
    }

    return { authenticatedUser, createUser, login, logout }
}