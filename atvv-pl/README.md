
Cliente

npx sequelize-cli model:generate --name clientes --attributes nome:string,nomeSocial:string,email:string,telefone:string,cpf:string,dataEmissaoCpf:string,Rg:string,ufRg:string,dataEmissaoRg:string,estado:string,cidade:string,bairro:string,rua:string,numero:string,cep:string,complemento:string

Produto
npx sequelize-cli model:generate --name produtos --attributes nome:string,valor:string

Serviços
npx sequelize-cli model:generate --name servicos --attributes nome:string,valor:string,periodo:string

Pets
npx sequelize-cli model:generate --name pets --attributes nome:string,tipo:string,raca:string,genero:string,dono:string

Vendas
npx sequelize-cli model:generate --name vendas --attributes cpfCliente:string,produtoServico:string,quantidade:string,valorTotalVenda:string,tipo:string,pet:string,idPet:string,tipoPet:string,racaPet:string

Telefones
npx sequelize-cli model:generate --name telefones --attributes telefone:string,idCliente:integer

RGs
npx sequelize-cli model:generate --name rg --attributes rgCliente:string,ufRgCliente:string,dataEmissaoRgCliente:string,idCliente:integer


npx sequelize-cli db:migrate