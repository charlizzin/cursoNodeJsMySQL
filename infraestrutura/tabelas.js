class Tabelas {
    init(conexao) {
        console.log('Tabelas chamadas!')

        this.conexao = conexao
        this.criarAtendimentos()
        this.criarPets()
    }
    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT,cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, observacoes text, PRIMARY KEY(id)) '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabelas Atendimentos criada')
            }
        })
    }
    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'

        this.conexao.query(query, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela PEts criado com sucesso')
            }
        })
    }
}

module.exports = new Tabelas