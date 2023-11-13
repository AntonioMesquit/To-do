import { Container } from "./style.js";
import circulosemclique from '../../assets/circlenoclick.svg'
import trash from '../../assets/trash.svg'
export function Task(){
return(
    <Container>
    <button><img src={circulosemclique}/></button>
    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.ss</p>
    <button><img src={trash}/></button>
    
</Container>
)
}