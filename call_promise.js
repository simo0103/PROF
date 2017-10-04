
//Call Promise

let esito_esame = () =>
    superero_lesame
        .then((esito_se_promosso) => 
            console.log('Esito: ' + esito_se_promosso.msg + " " + voto)
        )
        .catch((esito_se_bocciato) =>
            console.log('Esito: ' +esito_se_bocciato.msg + " " + voto)
        );

esito_esame();


let esito_esame = () =>
superero_lesame
    .then((esito_se_promosso) => {
        
        setTimeout(function(){
            console.log('Esito: ' + esito_se_promosso.msg + " " + voto)            
        }, 5000);    
    })
    .catch((esito_se_bocciato) =>
        console.log('Esito: ' +esito_se_bocciato.msg + " " + voto)
    );

esito_esame();
