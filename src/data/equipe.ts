/**
 * L'équipe qui construit bxFlow.
 *
 * Les personnes vivent ici, leurs textes dans les traductions : un rôle et un
 * parcours se disent en deux langues, un nom ne se traduit pas. Les deux sont
 * reliés par `id` plutôt que par la position dans la liste — deux tableaux
 * alignés par index finissent toujours par se décaler, et le jour où cela
 * arrive, une personne porte le parcours d'une autre.
 *
 * `photo` est facultative, et la carte retombe sur le monogramme quand elle
 * manque : une personne sans portrait ne doit pas laisser un trou ni un
 * visage d'emprunt. Les fichiers sont dans `public/equipe/`, carrés et
 * réduits à 224 px — le carré est fait AVANT la réduction, sinon un portrait
 * non carré se retrouve écrasé.
 */
/**
 * Les identifiants sont une union fermée, pas des chaînes libres : c'est ce qui
 * fait échouer la compilation si une fiche manque dans les traductions, plutôt
 * que d'afficher une carte sans rôle ni parcours.
 */
export type MembreId = 'boly' | 'farba' | 'guy' | 'abdourahmane' | 'malak';

export interface Membre {
  id: MembreId;
  nom: string;
  initiales: string;
  photo?: string;
  linkedin?: string;
}

export const EQUIPE: Membre[] = [
  { id: 'boly', nom: 'Boly Sene', initiales: 'BS', photo: '/equipe/boly.webp' },
  { id: 'farba', nom: 'El Hadj Farba Toure', initiales: 'FT', photo: '/equipe/farba.webp' },
  { id: 'guy', nom: 'Guy Essala', initiales: 'GE', photo: '/equipe/guy.webp' },
  { id: 'abdourahmane', nom: 'Abdourahmane Sow', initiales: 'AS', photo: '/equipe/abdourahmane.webp' },
  { id: 'malak', nom: 'Malak Mouaky', initiales: 'MM' },
];
