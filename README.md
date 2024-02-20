### Requisitos

    - Deve ser possível criar uma conta
    - Deve ser possível buscar o extrato bancário do cliente
    - Deve ser possível realizar um depósito
    - Deve ser possível realizar um saque
    - Deve ser possível buscar o extrato bancário do cliente por data
    - Deve ser posível atualizar os dados da conta do cliente
    - Deve ser possível obter os dados de todas as conta de clientes
    - Deve ser possível deletar uma conta

### Regras de negócio

    - Não deve ser possível criar uma conta com um CPF já existente
    - Não deve ser possível buscar extrato em uma conta não existente
    - Não deve ser possível fazer um depósito em uma conta não existente
    - Não deve ser possível realizar um depósito negativo
    - Não deve ser possível fazer saque em uma conta não existente
    - Não deve ser possível fazer um saque quando o saldo for insuficiente
    - Não deve ser possível excluir uma conta não existente