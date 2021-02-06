Vue.component('Formulario', {
    template: `
    <div class="d-flex justify-content-center">

        <div class="row">
            <div class="mt-3 col-sm">
                <label for="peso" class="form-label">Peso</label>
                <input v-model="" type="email" class="form-control" id="peso" placeholder="Adicionar Peso">
            </div>
            <div class="mt-3 col-sm">
                <label for="valor" class="form-label">Valor</label>
                <input type="email" class="form-control" id="valor" placeholder="Adicionar Valor">
            </div>
            <div style="flex: none;" class="col mt-3">
                <button id="add" style="width: 100%" class="btn btn-primary" type="button">Adicionar</button>
            </div>
        </div>

    </div>
    
    `,

    data: {
        linhas: [

        ]
    }
})
new Vue({
    el: '#app'
})