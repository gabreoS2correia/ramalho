function price(){
    /* variáveis */
    let v = parseFloat(document.getElementById('v').value);
    let i = parseFloat(document.getElementById('i').value);
    let n = parseFloat(document.getElementById('n').value);
    let juros = v * i;
    let p = (v * Math.pow(1+i , n) * i)/(Math.pow(1+i , n)-1);
    let amor = p - juros;
    let corpo = document.querySelector('#tab tbody');
    let linha1 =`
                <tr>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${v.toFixed(2)}</td>
                </tr>
                `;

    /* tratamento de erro */
    if (isNaN(v) || isNaN(i) || isNaN(n)){
        alert ('Um ou mais campos foram preenchidos incorretamente. Certifique-se de que todas as informações são números válidos.')
    }else{
    /* processo de construção da tabela */
        corpo.innerHTML = linha1;
        for (let par=1; par<=n; par++){

            let linha =`
                <tr>
                    <td>${par}</td>
                    <td>${p.toFixed(2)}</td>
                    <td>${juros.toFixed(2)}</td>
                    <td>${amor.toFixed(2)}</td>
                    <td>${(v-amor).toFixed(2)}</td>
                </tr>
                `;

            corpo.innerHTML += linha;
            v = v - amor;
            juros = v * i;
            amor = p - juros;
        }
    }

}
