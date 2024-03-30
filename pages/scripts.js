// Função para abrir o modal com o conteúdo da categoria selecionada
function abrirModal(categoria) {
    const modal = document.getElementById('modal');
    const modalIframe = document.getElementById('modal-iframe');
    modalIframe.src = `medicamento.html?categoria=${encodeURIComponent(categoria)}`;
    modal.style.display = 'block';

    // Adicionar evento de clique aos links dentro do iframe
    modalIframe.onload = function () {
        const linksMedicamentos = modalIframe.contentWindow.document.querySelectorAll(
            'a[data-medicamento]');
        linksMedicamentos.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Impede o comportamento padrão do link
                const medicamento = this.getAttribute('data-medicamento');
                abrirPaginaCalculo(medicamento);
            });
        });
    };
}
// Função para abrir a página de cálculo em uma nova aba ou janela
function abrirPaginaCalculo(medicamento) {
    const urlCalculo = `calculo.html?medicamento=${encodeURIComponent(medicamento)}`;
    window.open(urlCalculo, '_blank'); // Abre em uma nova aba ou janela
}
// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function abrirModalPesquisa() {
    const modal = document.getElementById('modal1');
    modal.style.display = 'block'; // Exibe o modal
}

function fecharModalPesquisa() {
    const modal = document.getElementById('modal1');
    modal.style.display = 'none'; // Oculta o modal
}

function pesquisarMedicamento() {
    const termoPesquisa = document.getElementById('termoPesquisa').value.trim();
    if (termoPesquisa) {
        const medicamentoEncontrado = filtrarMedicamentos(termoPesquisa);
        if (medicamentoEncontrado) {
            const confirmarCalculo = confirm('Deseja calcular a dosagem para o medicamento selecionado?');
            if (confirmarCalculo) {
                abrirPaginaCalculo(medicamentoEncontrado); // Redireciona para a página de cálculo
            }
        } else {
            alert('Medicamento não encontrado.');
        }
    }
}

function abrirPaginaCalculo(medicamento) {
    const urlCalculo = `calculo.html?medicamento=${encodeURIComponent(medicamento)}`;
    window.open(urlCalculo, '_blank'); // Abre em uma nova aba ou janela
}

function filtrarMedicamentos(termoPesquisa) {
    // Implemente sua lógica de filtragem aqui
    // Este é apenas um exemplo estático
    const medicamentosFiltrados = {
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

    for (const categoria in medicamentosFiltrados) {
        const medicamentos = medicamentosFiltrados[categoria];
        for (const medicamento of medicamentos) {
            if (medicamento.toLowerCase().includes(termoPesquisa.toLowerCase())) {
                return medicamento; // Retorna o primeiro medicamento encontrado que corresponde ao termo de pesquisa
            }
        }
    }

    return null; // Retorna null se nenhum medicamento for encontrado
}
