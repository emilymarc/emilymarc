import supertest from "supertest";
import app from "../../..";

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "alo",
                email: "nataliaAlo6@gmail.com",
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            })
    
            expect(response.status).toBe(201)
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "alo",
                email: "nataliaAlo7@gmail.com",
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            })
    
            expect(response.body).toEqual(
                expect.objectContaining({
                    createdAt: expect.any(String),
                    id: expect.any(Number),
                    nome: expect.any(String),
                    email: expect.any(String),
                    senha: expect.any(String),
                    apresentacao: expect.any(String),
                    bairro: expect.any(String),
                    updatedAt: expect.any(String),
                })
            ) 

            expect(JSON.parse(response.text)).toMatchObject(
                {
                    nome: "alo",
                    email: "nataliaAlo7@gmail.com", 
                })

            expect(response.body).toMatchObject(
             {
                nome: "alo",
                email: "nataliaAlo7@gmail.com", 
            })

            expect(response.body).toEqual(
                expect.objectContaining({
                    nome: "alo",
                    email: "nataliaAlo8@gmail.com",
                    apresentacao: "bla bla bla",
                })
            )
        })


    })
})