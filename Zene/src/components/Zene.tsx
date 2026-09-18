import type { ZeneTipus } from "../adat";

interface ZeneProps{
    zenem:ZeneTipus
}
export default function({zenem}:ZeneProps){
return(
    <>
    <div className="Zene">
                <h2>{zenem.nev}</h2>
      <p><span>Előadó neve:</span>{zenem.eloado}</p>
      <p><span>Zene stilusa:</span>{zenem.stilus}</p>
      <button>Kiválaszt</button>
    </div>
    
    </>
)
}