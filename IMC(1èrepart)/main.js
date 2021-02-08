let kilo = document.querySelector('.Kg');
let mètre = document.querySelector('.metre');
const Effacer = document.querySelector('.effacer');
const Calculer = document.querySelector('.Calculer');
let Résultat = document.querySelector('.Resultat');
let Conclusion =document.querySelector('.Conclusion');

function calculIMC() {
    Calculer.addEventListener('click',()=>{
        let vlrKilo = kilo.value;
        let vlrmètre = mètre.value;
        const IMC = vlrKilo/vlrmètre**2;
        Résultat.innerHTML = IMC;
        if(IMC < 18.5){
            Conclusion.innerHTML = 'Vous êtes maigres';
        }else if(IMC >= 18.5 && IMC < 25){
            Conclusion.innerHTML = 'Vous avez un poids convenable à  votre poids';
        }else if(IMC >= 25 && IMC < 30){
            Conclusion.innerHTML = 'Vous êtes en surpoids';
        }else if(IMC >= 30 && IMC < 35){
            Conclusion.innerHTML = 'Vous êtes obèse';
        }else if(IMC >= 35 && IMC < 40){
            Conclusion.innerHTML = 'Vous êtes en obésité morbide';
        }

        if(isNaN(vlrKilo) || vlrKilo<0 ){
            alert("Mauvais nombre");

        }

    

        
    })
}

calculIMC();