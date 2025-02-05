import { add, PI } from './5-modules';
import * as module5 from './5-modules';
/**
 * On peut importer des types / constantes / fonctions / classes qui sont exportés depuis d'autres fichiers
 */
add(1, PI);

module5.add(1, module5.PI);
