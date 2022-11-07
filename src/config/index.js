//index.js
import development from './development'
import production from './production'

const NODE_ENV = import.meta.env.MODE;

let ENV_VAR = null;
if (NODE_ENV === "dev") {
  ENV_VAR = development;
} else if (NODE_ENV === "pro") {
  ENV_VAR = production;
}

export default ENV_VAR;
