function price(){
    /* variáveis */
    let v = parseFloat(document.getElementById('v').value);
    let i = parseFloat(document.getElementById('i').value);
    let n = parseFloat(document.getElementById('n').value);
    let juros = v * i;
    let p = (v * Math.pow(1+i , n) * i)/(Math.pow(1+i , n)-1);
    let amor = p - juros;
    let corpo = document.querySelector('table tbody');
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

function resposta(){
    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var contador = 0;
    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 1200; i = 0,02; n = 12.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 113,47</p>"
        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 80000; i = 0,005; n = 180.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 675,06</p>"
        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "<p>Incorreta. Utilize os dados da questão: P = 1035,62; i = 0,01; n = 24.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 22000</p>"
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 100000; i = 0,0099; n = 240.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 1092,73</p>"
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 100000; i = 0,0099; n = 240.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 1092,73</p>"
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "<p>Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!</p>"
        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("Não deixe questões em branco!")
    }
}
