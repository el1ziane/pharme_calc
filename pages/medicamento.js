 // Função para obter parâmetros da URL
 function obterParametroURL(nome) {
     const urlParams = new URLSearchParams(window.location.search);
     return urlParams.get(nome);
 }

 // Função para exibir o nome da categoria na página
 function exibirNomeCategoria() {
     const categoria = obterParametroURL('categoria');
     const elementoCategoria = document.getElementById('categoria');
     elementoCategoria.textContent = categoria;
 }

 // Função para listar os medicamentos da categoria selecionada
 function listarMedicamentos() {
     const categoria = obterParametroURL('categoria');
     const medicamentosPorCategoria = {
         'antibioticos': ['Azitromicina', 'Amoxicilina + Clavulanato', 'Cefalexina',
             'Sulfametoxazol + Trimetoprima', 'Eritromicina'
         ],
         'anti-inflamatorios': ['Cetoprofeno', 'Diclofenaco', 'Ibuprofeno', 'Nimesulida'],

         'anti-convulsivantes': ['Carbamazepina', 'Diazepam', 'Fenitoína', 'Fenobarbital'],

         'anti-fungicos': ['Cetoconazol', 'Fluconazol', 'Nistatina'],

         'anti-histaminicos': ['Dexclorfeniramina', 'Loratadina'],

         'anti-parasitarios': ['Albendazol', 'Mebendazol', 'Metronidazol'],
         'broncodilatadores': ['Acebrofilina', 'Terbutalina'],

         'corticosteroides': ['Dipropionato de Betametasona Sulfato de Gentamicina', 'Acetato de Hidrocortisona'],

         'laxativos': ['Hidróxido de Magnésio', 'Lactulose', 'Óleo Mineral'],

         'sintomaticos': ['Ambroxol', 'Bromoprida', 'Dipirona Sódica', 'Metoclopramida'],
         'intravenosa': ['Ácido Épsilon e Aminocapróico', 'Adenosina', 'Mesilato de Codergocrina', 'Enoxaparina Sódica']
     };

     const medicamentos = medicamentosPorCategoria[categoria.toLowerCase()]; // Convertendo para minúsculas para garantir a correspondência
     const listaMedicamentos = document.getElementById('medicamentos');
     listaMedicamentos.innerHTML = '';

     if (medicamentos) { // Verifica se existem medicamentos para a categoria selecionada
         medicamentos.forEach(medicamento => {
             const itemLista = document.createElement('li');

             // Dentro da função listarMedicamentos, quando criar o linkMedicamento
             const linkMedicamento = document.createElement('a');
             linkMedicamento.textContent = medicamento;
             linkMedicamento.setAttribute('data-medicamento', medicamento);
             linkMedicamento.href = `calculo.html?medicamento=${medicamento}`; // Adiciona o link para a página "calculo.html"

             // Div para a descrição do medicamento
             const descricaoMedicamento = document.createElement('div');
             descricaoMedicamento.className = 'descricao-medicamento';
             descricaoMedicamento.textContent = obterDescricaoMedicamento(medicamento); // Função para obter a descrição do medicamento

             // Botão redondo com seta
             const botaoSeta = document.createElement('button');
             botaoSeta.className = 'botao-seta';
             botaoSeta.innerHTML =
                 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>';

             // Função para lidar com o clique no botão de seta
             botaoSeta.onclick = () => {
                 descricaoMedicamento.classList.toggle('descricao-mostrada');
                 botaoSeta.querySelector('svg').style.transform = descricaoMedicamento.classList.contains('descricao-mostrada') ? 'rotate(0)' : 'rotate(-90deg)';
                 adicionarDescricao(descricaoMedicamento); // Chama a função para adicionar a descrição
             };

             // Função para adicionar a descrição do medicamento
             function adicionarDescricao(descricaoMedicamento) {
                 const divDescricao = listaMedicamentos.querySelector('.descricao-medicamento');
                 if (descricaoMedicamento.classList.contains('descricao-mostrada')) {
                     if (!divDescricao) {
                         const novaLinha = document.createElement('li');
                         novaLinha.className = 'descricao-medicamento';
                         novaLinha.textContent = obterDescricaoMedicamento(medicamento);
                         listaMedicamentos.insertBefore(novaLinha, itemLista.nextSibling);
                     }
                 } else {
                     if (divDescricao) {
                         divDescricao.remove();
                     }
                 }
             }

             itemLista.appendChild(linkMedicamento);
             itemLista.appendChild(botaoSeta);
             listaMedicamentos.appendChild(itemLista);
         });

     } else {
         const itemLista = document.createElement('li');
         itemLista.textContent = 'Nenhum medicamento encontrado para esta categoria.';
         listaMedicamentos.appendChild(itemLista);
     }
 }

 // Função para obter a descrição do medicamento
 function obterDescricaoMedicamento(medicamento) {
     switch (medicamento) {
         case 'Azitromicina':
             return 'Nome Comercial: Azitromicina Forma de Apresentação: Comprimido com 500 mg; Administração: Oral';
         case 'Amoxicilina + Clavulanato':
             return 'Nome comercial: Clavulin; Forma de Apresentação: Ampola 1 g + 200 mg; Administração: Intravenosa';
         case 'Eritromicina':
             return 'Nome Comercial: Ilosone; Forma de Apresentação: Suspensão 250 mg/ 5 ml; Administração: Oral';
         case 'Cefalexina':
             return 'Nome Comercial: Keflex, Cefalexina; Forma de Apresentação: Comprimido 500 mg; Administração: Oral';
         case 'Cetoprofeno':
             return 'Nome Comercial: Profenid, Artrinid; Forma de Apresentação: Comprimido 50 mg; Administração: Oral;';
         case 'Diclofenaco':
             return 'Nome comercial: Diclonatium; Apresentação: Comprimido 50 mg; Administração: Oral';
         case 'Ibuprofeno':
             return 'Ibuprofeno Comprimido EMS; Administração: Oral';
         case 'Nimesulida':
             return 'Nome comercial: Nisulid, Sulonil; Apresentação: Comprimido 100 mg; Administração: Oral';
         case 'Carbamazepina':
             return 'Nome Comercial: Carbamazepina, Tegretol; Forma de Apresentação: Suspensão com 20 ml a 4%; Administração: Oral';
         case 'Diazepam':
             return 'Nome Comercial: Compaz, Santiazepan; Forma de Apresentação: Comprimido 5 mg, 10 mg; Administração: Oral';
         case 'Fenitoína':
             return 'Nome Comercial: Fenital, Hidantal, Epelin; Forma de Apresentação: Ampola de 50 mg com 5 ml a 5 %, Frasco Ampola de 100 mg com 5 ml contendo 120 ml (suspensão);';
         case 'Fenobarbital':
             return 'Nome Comercial: Gardenal; Forma de Apresentação: Comprimido 100 mg; Administração: Oral;';
         case 'Cetoconazol':
             return 'Nome Comercial: Nisoral; Forma de Apresentação: Comprimido 200 mg; Administração: Oral;';
         case 'Fluconazol':
             return 'Nome comercial: Flucanil; Apresentação: Comprimido 150 mg; Administração: Oral';
         case 'Nistatina':
             return 'Nome Comercial: Micostatin, Costatin; Forma de Apresentação: Suspensão 100.000 UI; Administração: Oral';
         case 'Dexclorfeniramina':
             return 'Nome comercial: Polaramine; Apresentação: Comprimido 6 mg; Administração: Oral';
         case 'Loratadina':
             return 'Nome comercial: Loratadin, Loritil e Claritin; Apresentação: Comprimido 10 mg; Administração: Oral';
         case 'Albendazol':
             return 'Nome Comercial: Zentel; Forma de Apresentação: Comprimido 400 mg; Administração: Oral';
         case 'Mebendazol':
             return 'Nome Comercial: Licor de Cacau; Forma de Apresentação: Suspensão 20 mg/ ml; Administração: Oral';
         case 'Metronidazol':
             return 'Nome comercial: Flagyl, Polibiotic; Apresentação: Comprimido 250 mg, 400 mg; Administração: Oral';
         case 'Acebrofilina':
             return 'Nome Comercial: Brondilat, Bronfilil; Forma de Apresentação: Xarope 25 mg/ 5 ml e 50 mg/ 5 ml; Administração: Oral';
         case 'Terbutalina':
             return 'Nome Comercial: Bricanyl; Forma de Apresentação: Xarope 0,3 mg; Administração: Oral';
         case 'Acetato de Hidrocortisona':
             return 'Nome Comercial: Gingilone; Forma de Apresentação: Pomada; Administração: Mucosa oral';
         case 'Dipropionato de Betametasona Sulfato de Gentamicina':
             return 'Nome Comercial: Candicort; Forma de Apresentação: Contém 0,5 mg de betametasona + 20 mg de cetoconazol; Administração: Tópico;';
         case 'Hidróxido de Magnésio':
             return 'Nome Comercial: Leite de magnésia; Forma de Apresentação: Suspensão 80 mg/ ml; Administração: Oral';
         case 'Lactulose':
             return 'Nome Comercial: Falarc; Forma de Apresentação: Xarope 667 mg/ ml; Administração: Oral';
         case 'Óleo Mineral':
             return 'Nome Comercial: Nujol, Mineróleo; Forma de Apresentação: Frasco com óleo mineral 100% 120mL; Administração: Oral';
         case 'Ambroxol':
             return 'Nome Comercial: Mucossolvan, Muconat; Forma de Apresentação: Xarope adulto 30 mg/ 5 ml, xarope adulto e pediátrico (gotas) 7,5 mg/ ml, 3 mg/ ml; Administração: Oral';
         case 'Bromoprida':
             return 'Nome Comercial: Plamet; Forma de Apresentação: Comprimido 10 mg; Administração: Oral';
         case 'Dipirona Sódica':
             return 'Nome Comercial: Dipirona; Forma de Apresentação: Xarope 50 mg/ ml; Administração: Oral';
         case 'Metoclopramida':
             return 'Nome Comercial: Plasil; Forma de Apresentação: Solução oral gotas pediátricas 4 mg/ ml; Administração: Oral';
         case 'Ácido Épsilon e Aminocapróico':
             return 'Nome Comercial: Ipsilon; Forma de Apresentação: Ampola 20 ml 4 g; Administração: Intravenosa';
         case 'Adenosina':
             return 'Nome comercial: Adenocard; Forma de Apresentação: Ampola de 2 ml; Administração: Intravenosa';
         case 'Mesilato de Codergocrina':
             return 'Nome Comercial: Hydergine; Forma de Apresentação: Ampola 1 ml (0,3 mg); Administração: Intravenosa, Subcutânea e Intramuscular';
         case 'Enoxaparina Sódica':
             return 'Nome comercial: Hepteron, Enoxalon; Forma de Apresentação: Ampola de 20 mg / 0,2 ml e 40 mg / 0,4 ml; Administração: Intravenosa, Subcutânea;';
         case 'Sulfametoxazol + Trimetoprima':
             return 'Nome Comercial: Bactrim; Forma de Apresentação: Suspensão 200 mg/ 5 ml, 40 mg/ 5ml; Administração: Oral';
         default:
             return 'Descrição do medicamento não encontrada.';
     }
 }

 // Chamadas de função para exibir o nome da categoria e listar os medicamentos ao carregar a página
 exibirNomeCategoria();
 listarMedicamentos();