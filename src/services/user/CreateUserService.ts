import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

 

interface UserRequest{
    nome:string,
    email:string,
    senha:string
}


class CreateUserService {

    async execute({ nome, email, senha }: UserRequest) {

        //Verificar se o valor do e-mail foi preenchido
        if (!email) {
            throw new Error("E-mail não enviado");
        }

        //verificar se o email já foi cadastrado
        const UserAlreadyExists = await prismaClient.usuario.findFirst({

            where: {
                email: email
            }

        })

        console.log(">>>>>>>>>>>>" + UserAlreadyExists)
        if (UserAlreadyExists!=null) {
            throw new Error("E-mail já cadastrado!");
        }

        //criptografando a senha
        const senhaHash = await hash(senha, 8);

        const user = await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash
            },
            select: {
                id:true,
                nome:true,
                email:true
            }
        })
        return user;
    }
}


export { CreateUserService }