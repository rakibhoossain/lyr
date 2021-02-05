import Vue from 'vue'
import { Player, Ui } from '@vime/vue-next';
// Default theme. ~960B
import '@vime/core/themes/default.css';

// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css';

Vue.use(Player, Ui)

