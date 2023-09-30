/*
Crie uma classe Cliente, essa classe deve ter nome, telefone, 
renda e e-mail como atributos e um método verificarCredito(), 
esse método deve retornar uma promise que retorna: Crédito aprovado 
(renda > 2000) ou Crédito recusado (renda < 2000)
*/

class Cliente {
        constructor(nome, telefone, renda, email) {
          this.nome = nome
          this.telefone = telefone
          this.renda = renda
          this.email = email
        }
      
        verificarCredito() {
          return new Promise((resolve, reject) => {
            if (this.renda > 2000) {
              resolve("Crédito aprovado")
            } else {
              reject("Crédito recusado")
            }
          });
        }
      
        Dados() {
          console.log(`Nome: ${this.nome}`)
          console.log(`Telefone: ${this.telefone}`)
          console.log(`Renda: ${this.renda}`)
          console.log(`Email: ${this.email}`)
        }
      }

function CreditoDados(cliente) {
    cliente.verificarCredito()
    .then((credito) => {
        cliente.Dados()
        console.log(`Mensagem: ${credito}\n`)
    })
    .catch((credito) => {
        cliente.Dados()
        console.log(`Mensagem: ${credito}\n`)
    })
}

const cliente1 = new Cliente("João", "(19) 99670-7890", 2500, "joao@email.com")
const cliente2 = new Cliente("Maria", "(11) 99592-3984", 2000, "maria@email.com")
const cliente3 = new Cliente("Jorge", "(19) 99815-7465", 1500, "jorge@email.com")
      
CreditoDados(cliente1)
CreditoDados(cliente2)
CreditoDados(cliente3)