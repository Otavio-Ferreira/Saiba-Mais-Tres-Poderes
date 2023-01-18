const result1 = document.getElementById('funcao')
const result2 = document.getElementById('apoio')
const result3 = document.getElementById('salario')
const result4 = document.getElementById('mais')
const result5 = document.getElementById('imagem')

class Executivo{
    constructor(){
        this.funcoes = {
            pres: ' O Presidente da República, autoridade suprema do Estado, dirige a política  interna e externa, promove ou orienta a política legislativa de interesse nacional e superintende a Administração do País.',

            gove: 'Governador é o cargo político que representa o poder da administração estadual e a representação do Estado em suas relações jurídicas, políticas e administrativas, defendendo seus interesses junto à Presidência e buscando investimentos e obras federais.',

            pref: 'O prefeito deve representar o município nas suas relações jurídicas, políticas e administrativas, além de sancionar, promulgar e publicar as leis.'
        }

        this.apoios = {
            pres: 'Ministerios',
            gove: 'Secretarias Estaduais',
            pref: 'Secretarias Municipais'
        }

        this.salarios = {
            pres: 'Atualmente o ganha em torno de R$39.200,00',
            gove: 'Varia de estado para estado, podendo ir de R$20.000,00 até R$30.000,00',
            pref: 'Os salários dos prefeitos são definidos pela Câmara Municipal, de acordo com orçamento geral do município. Podendo variar de R$6.000,00 até R$25.000,00'
        }

        this.mais = {
            pres: 'https://pt.wikipedia.org/wiki/Presidente_do_Brasil',
            gove: 'https://pt.wikipedia.org/wiki/Governador',
            pref: 'https://pt.wikipedia.org/wiki/Prefeito'
        }

        this.img = {
            exec: 'imagens/executivo.jpg',
            gove: 'imagens/legislativo.jpg',
            pref: 'imagens/judiciario.jpg'
        }
    }
}

class Presidente extends Executivo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.pres
        result2.innerHTML = this.apoios.pres
        result3.innerHTML = this.salarios.pres
        result4.href = this.mais.pres
        result5.src = this.img.exec
        result5.style.display = 'block'
    }

}

class Governador extends Executivo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.gove
        result2.innerHTML = this.apoios.gove
        result3.innerHTML = this.salarios.gove
        result4.href = this.mais.gove
        result5.src = this.img.exec
        result5.style.display = 'block'
    }

}

class Prefeito extends Executivo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.pref
        result2.innerHTML = this.apoios.pref 
        result3.innerHTML = this.salarios.pref
        result4.href = this.mais.pref
        result5.src = this.img.exec
        result5.style.display = 'block'
    }

}

let president = new Presidente()
let governor = new Governador()
let mayor = new Prefeito()

class legislativo{
    constructor(){
        this.funcoes = {
            sena: 'Os senadores legislam e fiscalizam. Os senadores podem propor a criação de novas leis e a alteração de leis já existentes. Outro papel ainda é avaliar os projetos de lei aprovados pelos deputados federais.',

            depe: 'É função do parlamentar apresentar projetos de lei, de decreto legislativo, de resolução, e proposta de emenda à Constituição Estadual e avaliar aqueles encaminhados por outros deputados, pelo governador, Poder Judiciário, Ministério Público, Tribunal de Contas e pelos cidadãos.',

            vere: 'Ao vereador cabe elaborar as leis municipais e fiscalizar a atuação do Executivo – no caso, o prefeito. São os vereadores que propõem, discutem e aprovam as leis a serem aplicadas no município.'
        }

        this.apoios = {
            todos: 'Gabinetes - Máximo de 10 Assessores.',
    
        }

        this.salarios = {
            sena: 'Atualmente o ganha em torno de R$39.200,00',
            depe: 'Em torno de  R$33.000,00',
            vere: 'O valor bruto é de R$11.529,00'
        }

        this.mais = {
            sena: 'https://pt.wikipedia.org/wiki/Senado',
            depe: 'https://pt.wikipedia.org/wiki/Deputado',
            vere: 'https://pt.wikipedia.org/wiki/Vereador'
        }

        this.img = {
            legi: 'imagens/legislativo.jpg'
        }
    }
}

class Senador extends legislativo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.sena
        result2.innerHTML = this.apoios.todos
        result3.innerHTML = this.salarios.sena
        result4.href = this.mais.sena
        result5.src = this.img.legi
        result5.style.display = 'block'
    }

}

class Deputado extends legislativo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.depe
        result2.innerHTML = this.apoios.todos
        result3.innerHTML = this.salarios.depe
        result4.href = this.mais.depe
        result5.src = this.img.legi
        result5.style.display = 'block'
    }

}

class Vereador extends legislativo{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.vere
        result2.innerHTML = this.apoios.todos
        result3.innerHTML = this.salarios.vere
        result4.href = this.mais.vere
        result5.src = this.img.legi
        result5.style.display = 'block'
    }

}

let senator = new Senador()
let congressperson = new Deputado()
let cityCouncilor = new Vereador()

class Judiciario{
    constructor(){
        this.funcoes = {
            stf: 'Sua função institucional fundamental é de servir como guardião da Constituição Federal de 1988, apreciando casos que envolvam lesão ou ameaça a suas provisões. De suas decisões não cabe recurso a nenhum outro tribunal.',

            stj: 'O Superior Tribunal de Justiça (STJ) é um dos órgãos máximos do Poder Judiciário do Brasil. Sua missão é zelar pela uniformidade de interpretações da legislação federal brasileira.',

            tri: 'O Tribunal de Justiça (TJ), no sistema jurídico brasileiro, é um órgão colegiado constituído de juízes de segunda instância, denominados "desembargadores".'
        }

        this.apoios = {
            stf: '11 Ministros',

            stj: '33 ministros: 11 juízes dos TRF, 11 desembargadores dos TJ e 11, alternadamente, dentre advogados e membros do Ministério Público.',

            tri: 'juizes de primeira instância e desembargadores.'
    
        }

        this.salarios = {
            stf: 'R$ 39.200,00',
            stj: 'R$ 26.700,00',
            tri: 'Desembargador: R$ 52.474,09 Juiz: R$36.990,30'
        }

        this.mais = {
            stf: 'https://pt.wikipedia.org/wiki/Supremo_Tribunal_Federal',
            stj: 'https://pt.wikipedia.org/wiki/Superior_Tribunal_de_Justi%C3%A7a',
            tri: 'https://pt.wikipedia.org/wiki/Tribunal_de_Justi%C3%A7a'
        }

        this.img = {
            judi: 'imagens/judiciario.jpg'
        }
    }
}

class Stf extends Judiciario{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.stf
        result2.innerHTML = this.apoios.stf
        result3.innerHTML = this.salarios.stf
        result4.href = this.mais.stf
        result5.src = this.img.judi
        result5.style.display = 'block'
    }

}

class Stj extends Judiciario{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.stj
        result2.innerHTML = this.apoios.stj
        result3.innerHTML = this.salarios.stj
        result4.href = this.mais.stj
        result5.src = this.img.judi
        result5.style.display = 'block'
    }

}

class Tribunais extends Judiciario{
    constructor(){
        super()
    }

    informations(){
        result1.innerHTML = this.funcoes.tri
        result2.innerHTML = this.apoios.tri
        result3.innerHTML = this.salarios.tri
        result4.href = this.mais.tri
        result5.src = this.img.judi
        result5.style.display = 'block'
    }

}

let federalCourtJustice = new Stf()
let supremeCourtJustice = new Stj()
let courts = new Tribunais()
