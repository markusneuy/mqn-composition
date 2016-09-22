'use strict';

/**
 * A proxy module that aggregates submodules
 * @module nf-promiser
 * @author Markus Neuy
 * @since 22.09.2016
 */
import composition  from './lib/composition';
import multiComposition from './lib/multi_composition';
export {composition};
export {multiComposition};
export default {composition, multiComposition};