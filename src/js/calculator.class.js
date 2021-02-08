class Calculator {

    rows = []

    constructor(){

        document.querySelector('#clean').onclick = () => {
            this.clean()
        }

        document.querySelector('#calculate').onclick = () => {

            if(this.rows.length == 0){
                this.addMsg(`<div class="alert alert-warning" role="alert">Preencha os campos acima! 😞</div>`)
            }else{
                let result = this.calculate(this.rows)
                this.addResult(`<h3>Resultado: </h3><kbd style="font-size: 20pt;">${result.valor}/${result.peso}</kbd> ou <kbd style="font-size: 20pt;">${result.valor/result.peso}</kbd>`)
                this.addMsg(`<div class="alert alert-primary" role="alert">Média calculada!🤓</div>`)
                
            }
            

        }

        document.querySelector('#add').onclick = () => {

            if(!this.verifyInputs(document.querySelector('#valor').value, document.querySelector('#peso').value)){

                this.addMsg(`<div class="alert alert-warning" role="alert">Preencha os campos acima! 😞</div>`)

            }else{
                this.addRow(parseFloat(document.querySelector('#valor').value), parseFloat(document.querySelector('#peso').value))
                this.addOnTable(document.querySelector('#valor').value, document.querySelector('#peso').value)
                this.addMsg(`<div class="alert alert-success" role="alert">Adicionado com sucesso 😄</div>`)

            }

        }

    }

    calculate(rows){

        let totalPeso = 0

        let totalValor = 0

        rows.forEach((row) => {

            totalValor += row.peso * row.valor

            totalPeso += row.peso
        })

        return {valor: totalValor, peso: totalPeso}
    }

    verifyInputs(valor, peso){

        if(valor == '' || peso == ''){
            return false
        }else{
            return true
        }

    }

    addRow(valor, peso){
        valor = parseFloat(valor)
        peso = parseFloat(peso)

        this.rows.push({valor, peso})
    }

    addMsg(msg){

        document.querySelector('#alert').innerHTML = msg

    }

    addOnTable(valor, peso){

        document.querySelector('table > tbody').innerHTML += 
        `<tr>
            <td>${valor}</td>
            <td>${peso}</td>
        </tr>`
    
    }

    addResult(msg){
        document.querySelector('#result').innerHTML = msg
    }



    clean(){

        this.rows = []

        document.querySelector('table > tbody').innerHTML = ''

        document.querySelector('#alert').innerHTML = ''

        document.querySelector('#result').innerHTML = ''

        document.querySelector('#valor').value = ''

        document.querySelector('#peso').value = ''

    }
}