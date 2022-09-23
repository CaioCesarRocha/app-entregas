import { Client } from "../../../../domain/client/client.entity";
import { ClientRepositoryInterface } from "@core/domain/client/client.repository";
import { prisma } from "../prismaClient";

export class ClientPrismaRepository implements ClientRepositoryInterface{ 
    constructor(){}

    async insert(client: Client): Promise<void> {
        await prisma.client.create({data: client.toJSON()})
    }
    async listAll(): Promise<Client[]> {
        const listClients: Client[] = []
        const clients = await prisma.client.findMany();
        clients.map(client => {
            listClients.push(Client.create(client))
        })
        return listClients;
    }    
    async findOne(id: string): Promise<Client> {
        const client =  await prisma.client.findUnique({where: {id : id}})
        return Client.create(client)
    }
    async update(id: string, client: Client): Promise<void> {
        await prisma.client.update({
            data: client.toJSON(), 
            where: {id : id}
        })
    }
    async delete(id: string): Promise<void> {
        await prisma.client.delete({where: {id: id}})
    }
}