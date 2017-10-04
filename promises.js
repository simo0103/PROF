//setInterval(function() {

    n_random = parseInt(((Math.random() * 30) + 1), 10);
    voto = n_random;

    //Declare Promise
    let superero_lesame = new Promise(
        (resolve, reject) => {

            if(voto > 18) {
                const promosso = {
                    msg: "Molto bravo! :)"
                };
                resolve(promosso);
            } else {
                const bocciato = {
                    msg: "Riprova :("
                }
                reject(bocciato);
            }
        }
    );

    let offriro_da_bere = function(voto) {
        return new Promise(
            (resolve, reject, voto) => {
                const promosso = {
                    msg: "Cosa volete da bere? Superato esame!",
                    vote: voto
                };
                resolve(promosso);
            }
        );
    }

    let esito_esame = () =>
    superero_lesame
        .then(offriro_da_bere())
        .then((msg_esito) => {
            console.log(msg_esito);
            console.log('Esito:' + voto)
        })

        .catch((esito_se_bocciato) =>
            console.log('Esito: ' +esito_se_bocciato.msg + " " + voto)
        );

    esito_esame();

//}, 5000);