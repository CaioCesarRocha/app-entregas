import { Client } from "./client.entity";


export interface ClientRepositoryInterface{
    insert(client: Client): Promise<void>;
    findAll(): Promise<Client[]>;
    //findOne(id: string): Promise<Client>;
    update(id: string, client: Client): Promise<void>;
    delete(id: string): Promise<void>
}