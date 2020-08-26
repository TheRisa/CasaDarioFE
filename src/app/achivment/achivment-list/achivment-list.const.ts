import { AchivmentCheckbox } from 'src/app/shared/models/achivment-service';
// Nota importante
// I colori sono:
// success - achivement regolare
// medium - achivment argento
// warning - achivment oro

/**
 * Array degli achivment legati a 'Presenze'
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
 * Array degli achivment legati a 'Austria'
 */
export const austriaCheckbox: AchivmentCheckbox[] = [
  {
    label: 'Sei stato in Autria dal Gonfia 1 volta',
    isChecked: false,
    color: 'success'
  },
  {
    label: 'Sei stato in Autria dal Gonfia 3 volte',
    isChecked: false,
    color: 'medium'
  },
  {
    label: 'Sei stato in Autria dal Gonfia 6 volte',
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
 * Array degli achivment legati a 'Cibo'
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
  }
];

/**
 * Array degli achivment legati a 'Varie'
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
    label: 'Hai completato tutti gli achivment di "Presenze"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai completato tutti gli achivment di "Austria"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai completato tutti gli achivment di "Cibo"',
    isChecked: false,
    color: 'warning'
  },
  {
    label: 'Hai dimostrato che Dario non aveva ragione',
    isChecked: false,
    color: 'warning'
  }
];
