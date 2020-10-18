import { AchivmentCheckbox } from 'src/app/shared/models/achivment-service';

// Nota importante
// I colori sono:
// success - achivement regolare
// medium - achievment argento
// warning - achievment oro

/**
 * Array degli achievment legati a 'Presenze'
 */
export const presenzeCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Segna da solo la presenza',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Ottieni 5 presenze totali',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Ottieni 10 presenze totali',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Ottieni 20 presenze totali',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Ottieni 50 presenze totali',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Ottieni 2 presenze mensili',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Ottieni 4 presenze mensili',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Ottieni 6 presenze mensili',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Ottieni 8 presenze mensili',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Vinci una gara presenze mensili',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Vinci la gara presenze annuali',
    isChecked: false,
    color: 'warning'
  }
];

/**
 * Array degli achievment legati a 'Austria'
 */
export const austriaCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Sei stato in Austria dal Gonfia 1 volta',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato in Austria dal Gonfia 3 volte',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Sei stato in Austria dal Gonfia 6 volte',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai mangiato la Wiener Schnitzel gigante',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai mangiato la Wiener Schnitzel gigante e il Kaiserschmarren',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai pisciato sulla cima del castello',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai giocato a Catan alcolico',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai vinto a Catan alcolico',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai subito lo scherzone dei fanali del Gonfia',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai preso una multa',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai preso 2 multe',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai preso 4 multe',
    isChecked: false,
    color: 'warning'
  }
];

/**
 * Array degli achievment legati a 'Cibo'
 */
export const ciboCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Sei stato a mangiare a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai mangiato wurstell a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: `Se ti c'entra il dolce allora ti entra anche la pasta`,
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai scroccato le noci',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato a mangiare da Liu',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai mangiato 40 ravioli da Liu',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Sei stato a mangiare al Mangio Pizza',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato a mangiare dalla Gina',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato a bere alla fontanella',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato a mangiare il gelato da Anisare',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato a mangiare il gelato al Nazionale',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai ammesso che il Nazionale è la migliore gelateria della piana',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai cucinato a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai apparecchiato a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai sparecchiato a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai rigovernato a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai bevuto almeno 5 prodotti Ilaria diversi',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai partecipato a una cena di Natale con CasaDario',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai ammesso che buono + buono fa buono',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai confermato di persona che buono + buono fa buono',
    isChecked: false,
    color: 'medium'
  }
];

/**
 * Array degli achievment legati a 'Varie'
 */
export const varieCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Hai installato e usato Satispay',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai giocato a Catan a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai partecipato al Clash a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai flammato le bionde',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai visto il nonno mangiare le Gocciole',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai dormito a CasaDario',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai completato tutti gli achievment di "Presenze"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai completato tutti gli achievment di "Austria"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai completato tutti gli achievment di "Cibo"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai dimostrato che Dario non aveva ragione',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai completato tutti gli achievment di "Social Relations"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai creato un nuovo achievment',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai giocato a lupus a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai creato un meme su CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai visto Vannino',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai cacato a CasaDario',
    isChecked: false,
    color: 'success'
  }
];

/**
 * Lista degli achievment per public relations
 */
export const publicRelationsCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Hai proposto un film che è stato visto e apprezzato a CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai tenuto una lezione alla lavagna di CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai visto Gianluca dopo la "Grande Scissione"',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai partecipato a un CasaDario con 8 persone',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai partecipato a un CasaDario con 10 persone',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai partecipato a un CasaDario con 12 persone',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai partecipato a un CasaDario con 15 persone',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai portato uno nuovo a CasaDario',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai portato una nuova a CasaDario',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai conosciuto ufficialmente madre',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai ottenuto la benedizione di madre',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai conosciuto ufficialmente padre',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai dato un passaggio di andata per CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai dato un passaggio di ritorno da CasaDario',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei gay',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Guido ti ha dato buca',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei venuto a CasaDario mentre nevicava',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai flirtato a CasaDario',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai rimorchiato a CasaDario',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai fatto il Leinad',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Hai festeggaito il compleanno a CasaDario',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai trascinato Dario fuori dalla sua "confort zone"',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Hai trascinato Dario a Pistoia',
    isChecked: false,
    color: 'warning'
  }
];
