function obterParametroURL(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

document.getElementById('calculoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const medicamento = obterParametroURL('medicamento');
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);

    if (isNaN(peso) || isNaN(idade)) {
        alert('Por favor, preencha os campos de peso e idade corretamente.');
        return; // Não faça o cálculo se os campos estiverem vazios ou não forem números
    }

    let doseRecomendada = '';

    switch (medicamento) {
        case 'Azitromicina':
            if (idade >= 18) {
                doseRecomendada = 'Adultos: 500 mg, 1 vez por dia, durante 3 dias';
            } else if (idade < 18 && peso >= 5 && peso <= 14) {
                doseRecomendada = `${10 * peso} mg, 1 vez por dia, durante 3 dias`;
            } else if (idade < 18 && peso >= 15 && peso <= 25) {
                doseRecomendada = '200 mg, 1 vez por dia, durante 3 dias';
            } else if (idade < 18 && peso >= 26 && peso <= 35) {
                doseRecomendada = '300 mg, 1 vez por dia, durante 3 dias';
            } else if (idade < 18 && peso >= 36 && peso <= 45) {
                doseRecomendada = '400 mg, 1 vez por dia, durante 3 dias';
            }
            break;
        case 'Amoxicilina + Clavulanato':
            if (idade >= 18) {
                doseRecomendada = 'Adultos: doses usuais 250 a 500 mg a cada 6 horas';
            } else if (idade <= 18 && peso < 20) {
                doseRecomendada = `${12.5 * peso} mg, a cada 6 horas`;
            } else if (idade <= 18 && peso >= 20) {
                doseRecomendada = 'doses usuais 250 a 500 mg a cada 6 horas';
            }
            break;
        case 'Cefalexina':
            if (idade <= 12) {
                doseRecomendada = 'dose usual 50 - 100 mg por kg de 6 em 6 horas';
            } else if (idade > 12) {
                doseRecomendada = 'Dose usual de 500 mg de 6 em 6 horas';
            }
            break;
        case 'Sulfametoxazol + Trimetoprima':
            if (peso < 40) {
                doseRecomendada = '20 a 30 mg por kg corporal';
            } else if (peso >= 40) {
                doseRecomendada = '400 mg em dose única';
            }
            break;
        case 'Eritromicina':
            if (idade >= 18) {
                doseRecomendada = '250 mg a cada 6 horas';
            } else if (idade < 18 && peso < 35) {
                doseRecomendada = '30 a 50 mg por Kg de peso corporal por dia, em doses divididas'
            } else {
                doseRecomendada = '250 mg a cada 6 horas';
            }
            break;
        case 'Cetoprofeno':
            if (idade >= 18) {
                doseRecomendada = '150 a 200 mg por dia'
            } else {
                doseRecomendada = 'A idade deve ser a partir de 18 anos';
            }
            break;
        case 'Diclofenaco':
            if (idade > 14) {
                doseRecomendada =
                    'Iniciar com 100 a 150 mg por dia, em doses divididas a cada 8 ou 12 horas'
            }
            break;
        case 'Ibuprofeno':
            if (idade > 12) {
                doseRecomendada =
                    'dose recomendada de 1 ou 2 comprimidos. Se necessário, esta dose pode ser repetida 3 a 4 vezes ao dia, com intervalo mínimo de 4 horas.'
            }
            break;
        case 'Nimesulida':
            if (idade >= 18) {
                doseRecomendada =
                    '50 a 100 mg, 2 vezes por dia, podendo chegar até 200 mg, 2 vezes por dia';
            } else if (idade < 18) {
                doseRecomendada = `${5 * peso} mg por dia, divididos em 2 tomadas`;
            }
            break;
        case 'Carbamazepina':
            if (idade < 18) {
                doseRecomendada = '10 a 20 mg por Kg de peso por dia, divididos em 3 ou 4 tomadas';
            } else if (idade >= 60) {
                doseRecomendada = '100 mg, duas vezes por dia';
            } else if (idade >= 18 || idade < 60) {
                doseRecomendada = 'inicial de 100 a 200 mg, 1 ou 2 vezes por dia';
            }
            break;
        case 'Diazepam':
            if (idade >= 18) {
                doseRecomendada = '2 a 10 mg de 2 a 4 vezes por dia';
            } else if (idade < 18) {
                doseRecomendada = '1 a 2,5 mg de 3 a 4 vezes por dia';
            }
            break;
        case 'Fenitoína':
            if (idade >= 18 && idade <= 60) {
                doseRecomendada =
                    '0,5 a 2 ampolas no prazo de 1 hora, nunca exceder 250 mg no prazo de 15 minutos';
            } else if (idade <= 18) {
                doseRecomendada =
                    `15mg/Kg de peso: ${15 * peso} mg. Obs.:nunca repetir antes de 15 minutos, e não excedendo em 24 horas o teor de 15 mg/ Kg de peso `;
            } else {
                doseRecomendada = 'iniciar com 100 mg 3 vezes ao dia';
            }
            break;
        case 'Fenobarbital':
            if (idade >= 18) {
                doseRecomendada = '100 a 200 mg por dia em dose única diária ao deitar';
            } else {
                doseRecomendada = '7 a 9 mg por Kg de peso corporal por dia';
            }
            break;
        case 'Cetoconazol':
            if (idade > 2 && idade < 18) {
                if (peso <= 20) {
                    doseRecomendada = '50 mg, em dose única diária';
                } else
                if (peso > 20 && peso <= 40) {
                    doseRecomendada = '100 mg, em dose única diária';
                } else if (peso > 40) {
                    doseRecomendada = '200 mg, em dose única diária';
                }
            } else if (idade >= 18) {
                doseRecomendada = '200 a 400 mg, em dose única diária';
            }
            break;
        case 'Fluconazol':
            if (idade >= 18) {
                doseRecomendada =
                    'Para candidíase vaginal usar em dose única de 150 mg. Para candidíase orofaríngeana 50 mg, em dose única por dia.';
            } else if (idade < 18) {
                doseRecomendada = `${3 * peso} mg em dose única diária.`;
            }
            break;
        case 'Nistatina':
            if (idade < 18) {
                doseRecomendada = ' 100.000 a 600.000 UI, 4 vezes por dia';
            } else {
                doseRecomendada = '500.000 a 1.000.000 UI, 3 a 4 vezes por dia.';
            }
            break;
        case 'Dexclorfeniramina':
            if (idade >= 2 && idade <= 5) {
                doseRecomendada = '0,5 mg a cada 4 a 6 horas';
            } else if (idade >= 6 && idade <= 11) {
                doseRecomendada = '1 mg a cada 4 a 6 horas';
            } else {
                doseRecomendada = '2 mg, de 3 a 4 vezes por dia';
            }
            break;

        case 'Loratadina':
            if (idade >= 2 && idade <= 11) {
                if (peso >= 30) {
                    doseRecomendada = '10 mg em dose única diária';
                } else if (peso < 30) {
                    doseRecomendada = '5 mg em dose única diária';
                }
            } else if (idade > 12) {
                doseRecomendada = '10 mg em dose única diária';
            }
            break;

        case 'Albendazol':
            if (idade >= 2 && idade < 18) {
                doseRecomendada = 'dose usual 400mg';
            } else if (idade >= 18) {
                doseRecomendada = 'Dose usual 400 mg/ dia';
            }
            break;
        case 'Mebendazol':
            if (idade >= 12 && idade < 18) {
                doseRecomendada = '100 mg 2 vezes por dia';
            } else if (idade >= 18) {
                doseRecomendada = '100 a 200 mg, 2 vezes por dia';
            } else {
                doseRecomendada = 'Acima de 12 anos';
            }
            break;
        case 'Metronidazol':
            if (idade >= 18) {
                doseRecomendada =
                    'Tricomoníase 800 mg por dia durante 7 dias ou 2 g em dose única. No caso de vaginite 800 a 1200 mg por dia durante 7 dias. Periodontite 400 mg, 3 vezes por dia durante 7 a 10 dias';
            } else {
                doseRecomendada = 'Uso adulto';
            }
            break;
        case 'Acebrofilina':
            if (idade >= 1 && idade <= 3) {
                doseRecomendada = `${1 * peso} mg a cada 12 horas.`;
            } else if (idade >= 6 && idade <= 12) {
                doseRecomendada = '50 mg cada 12 horas';
            } else if (idade > 12) {
                doseRecomendada = '100 mg cada 12 horas';
            }
            break;
        case 'Terbutalina':
            if (idade >= 6 && idade < 12) {
                doseRecomendada = '0,05 a 0,075 mg por kg de peso corporal, 3 vezes por dia.';
            } else if (idade >= 12 && idade <= 15) {
                doseRecomendada = '2,5 mg 3 vezes por dia.';
            } else if (idade > 15) {
                doseRecomendada = '2,5 a 5 mg 3 vezes por dia.';
            } else {
                doseRecomendada = 'A partir de 6 anos.'
            }
            break;
        case 'Dipropionato de Betametasona Sulfato de Gentamicina':
            if (idade >= 12) {
                doseRecomendada = 'Aplicar na pele, 1 a 4 vezes por dia.';
            } else {
                doseRecomendada = 'Crianças menores de 12 anos não têm dose estabelecida.';
            }
            break;
        case 'Acetato de Hidrocortisona':
            doseRecomendada = '3 a 6 fricções diárias nas gengivas.';
            break;
        case 'Hidróxido de Magnésio':
            if (idade >= 12) {
                doseRecomendada = '5 a 15 ml, de acordo com a necessidade.';
            } else {
                doseRecomendada = '2,5 a 5 ml, de acordo com a necessidade.';
            }
            break;
        case 'Lactulose':
            if (idade >= 1 && idade <= 5) {
                doseRecomendada = '5 a 10 ml por dia.';
            } else if (idade >= 6 && idade <= 12) {
                doseRecomendada = '10 a 15 ml por dia.';
            } else if (idade > 12) {
                doseRecomendada = '15 a 30 ml por dia.';
            }
            break;
        case 'Óleo Mineral':
            if (idade >= 18) {
                doseRecomendada =
                    '15mL à noite e 15mL pela manhã, podendo ser aumentada para 30mL à noite e 15mL pela manhã';
            } else if (idade > 6 && idade < 18) {
                doseRecomendada = ' 7,5mL(meia colher de sopa) à noite ou pela manhã';
            } else {
                doseRecomendada = 'Para maiores de 6 anos.'
            }
            break;
        case 'Ambroxol':
            if (idade <= 2) {
                doseRecomendada = '2,5 ml 2 vezes ao dia.';
            } else if (idade >= 2 && idade <= 5) {
                doseRecomendada = '2,5 ml 3 vezes ao dia.';
            } else if (idade >= 5 && idade <= 10) {
                doseRecomendada = '5 ml 3 vezes ao dia.';
            } else {
                doseRecomendada = '5 ml 3 vezes ao dia.';
            }
            break;
        case 'Bromoprida':
            if (idade > 1 && idade < 18) {
                doseRecomendada = `Dose usual de ${0.2 * peso} mg a cada 6 ou 8 horas.`;
            } else if (idade >= 18) {
                doseRecomendada =
                    'Dose usual 10 mg, 3 x dia, 30 - 40 min antes das refeições dose máxima 60 mg/ dia';
            } else {
                doseRecomendada = 'A partir de 1 ano de idade.';
            }
            break;
        case 'Dipirona Sódica':
            if (idade < 15) {
                doseRecomendada =
                    `${10 * peso} mg por dose, até 4 doses por dia; Obs.: não deve ser adm em crianças menores de 3 meses de idade.`;
            } else if (idade >= 15) {
                doseRecomendada = '500 mg a 750 mg por dose, até 4 doses por dia.';
            }
            break;
        case 'Metoclopramida':
            if (idade >= 1 && idade <= 3) {
                doseRecomendada = '5 gotas (1,0 mg), 2 a 3 vezes ao dia.';
            } else if (idade > 3 && idade <= 5) {
                doseRecomendada = '10 gotas (2,0 mg), 2 a 3 vezes ao dia.';
            } else if (idade > 5 && idade <= 14) {
                doseRecomendada = '13 gotas (2,5 mg) a 26 gotas (5 mg), 3 vezes ao dia.';
            } else if (idade >= 15) {
                doseRecomendada = '10 mg 3 vezes por dia.';
            } else {
                doseRecomendada = 'Idade fora da faixa de dosagem.';
            }
            break;
        case 'Ácido Épsilon e Aminocapróico':
            if (idade >= 12 && idade < 60) {
                doseRecomendada = '4 a 5 g administrados durante 1 hora.';
            } else if (idade >= 60) {
                doseRecomendada =
                    '4 a 5 g administrados durante 1 hora; Idosos podem exigir diminuição das doses se houver diminuição da função renal.';
            } else {
                doseRecomendada = 'Não foi encontrada referência de dosagem no guia utilizado.';
            }
            break;
        case 'Adenosina':
            if (idade <= 12) {
                doseRecomendada = `${0.05 * peso} mg por dose.`;
            } else if (idade > 12) {
                doseRecomendada = '6 mg em dose intravenosa rápida.';
            }
            break;
        case 'Mesilato de Codergocrina':
            if (idade >= 18) {
                doseRecomendada = '0,3 mg, 1 ou 2 vezes por dia, via intravenosa lenta.';
            } else {
                doseRecomendada = 'Não foi encontrada referência de dosagem no guia utilizado.';
            }
            break;
        case 'Enoxaparina Sódica':
            if (idade >= 18) {
                doseRecomendada = '20 a 40 mg por dia em dose única durante 10 dias.';
            } else {
                doseRecomendada = 'Não foi encontrada referência de dosagem no guia utilizado.';
            }
            break;

        default:
            doseRecomendada = 'Medicamento não reconhecido';
    }

    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.textContent = doseRecomendada;
});