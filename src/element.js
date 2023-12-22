import { Button, Main, Container, Header, Aside, Input } from "element-ui";
let  components =  {
  Button,
  Main,
  Container,
  Header,
  Aside,
  Input
};
export default {
  install(Vue){
    Object.keys(components).forEach(key => {
      console.log(components[key])
      Vue.component(components[key].name,components[key]);
    });
  }
}