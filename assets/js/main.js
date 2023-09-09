/* SNACK 08.09.2023 */

/* Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
    Es:
[
    { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
    { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
    { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */

//FILTER
const animals = [
    { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];

const mammals = animals.filter((animal) => animal.classe === "mammiferi");

console.log("Mammiferi =", mammals);

//FOR EACH PER STAMPARE IN SCHERMO

//RECUPERO UN ELEMENTO DELLA DOM SU CUI STAMPARE L'OUTPUT
const mammalsP = document.getElementById("mammalsP");

//FOR EACH CICLA DIRETTAMENTE ALL'INTERNO DEGLI OGGETTI (for each animal dentro mammals...)
mammals.forEach(animal => {

    mammalsP.insertAdjacentHTML("beforeend", (`Nome = ${animal.nome}, Famiglia = ${animal.famiglia}, Classe= ${animal.classe} <br>`));

});

//FOR IN CICLA A LIVELLO DELL'ARRAY
for (const key in animals) {

    console.log("oggetto in posizione key", key, "=", animals[key]);

    //POSSIAMO COMUNQUE RAGGIUNGERE LE PROPRIETA' DEGLI OGGETTI CICLATI
    console.log("nome dell'animale in posizione key", key, "=", animals[key].nome);
}

/* Snack 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

//MAP
const drivers = [
    {
        nome: "Paolo",
        cognome: "Rossi",
        età: 18,
    },

    {
        nome: "Marco",
        cognome: "Verdi",
        età: 30,
    },

    {
        nome: "Giovanni",
        cognome: "Neri",
        età: 10,
    },

    {
        nome: "Giuseppe",
        cognome: "Gialli",
        età: 15,
    },

]

//METODO 1

const driversCheck = drivers.map(guidatore => {
    if (guidatore.età < 18) {

        // AGGIUNGO LA CHIAVE drivecheck
        guidatore.drivecheck = [guidatore.nome] + " " + [guidatore.cognome] + " non ha passato il test e non può guidare";

        //RITORNO IL VALORE IN MODO CHE VENGA INSERITO NELL'ARRAY driversCheck
        return guidatore;

    } else {

        // AGGIUNGO LA CHIAVE drivecheck
        guidatore.drivecheck = [guidatore.nome] + " " + [guidatore.cognome] + " ha passato il test e può guidare";

        //RITORNO IL VALORE IN MODO CHE VENGA INSERITO NELL'ARRAY driversCheck
        return guidatore;

    }
});

console.log("driversCheck (Metodo 1) =", driversCheck); //ANCHE drivers è STATO MODIFICATO

//METODO 2

const canDriveCheck = drivers.map(guidatore => {

    //CREO UNA VARIABILE CON IL TEMPLATE LITERAL DELLA PROP
    const canDrive = `${guidatore.nome} ${guidatore.cognome} ${guidatore.età < 18 ? "non può guidare" : "può guidare"}`;

    // AGGIUNGO LA CHIAVE drivecheck CON VALORE canDrive
    guidatore.drivecheck = canDrive;

    //RITORNO IL VALORE IN MODO CHE VENGA INSERITO NELL'ARRAY canDriveCheck
    return guidatore;

});

console.log("canDriveCheck (Metodo 2) =", canDriveCheck); //ANCHE drivers è STATO MODIFICATO

/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

//FOR EACH
const zucchine = [
    {
        varietà: "lunga",
        peso: 5,
        lunghezza: 90,
    },

    {
        varietà: "torda",
        peso: 30,
        lunghezza: 10,
    },

    {
        varietà: "campana",
        peso: 15,
        lunghezza: 90,
    },

    {
        varietà: "halloween",
        peso: 5,
        lunghezza: 30,
    },

    {
        varietà: "a palla",
        peso: 25,
        lunghezza: 50,
    },

    {
        varietà: "lunga",
        peso: 60,
        lunghezza: 90,
    },

    {
        varietà: "lunga",
        peso: 55,
        lunghezza: 90,
    },

    {
        varietà: "brutta",
        peso: 35,
        lunghezza: 90,
    },

    {
        varietà: "lunga",
        peso: 80,
        lunghezza: 90,
    },

    {
        varietà: "lunga",
        peso: 5,
        lunghezza: 90,
    },
];

let totale = 0

zucchine.forEach(zucchina => {

    totale += zucchina.peso;

})

console.log("Peso totale delle zucchine =", totale);


