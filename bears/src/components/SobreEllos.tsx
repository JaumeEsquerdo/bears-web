import sobreEllosData from "../json/sobreEllos";
// import ImagePopup from "./ImagePopup";
import { SobreEllosItem } from "./SobreEllosItem";
const SobreEllos = () => {
    return (
        <div className="flex flex-col justify-between gap-56">
            <p className="text-sm text-main">Los osos grizzly son uno de los símbolos más icónicos de la vida salvaje de Norteamérica. Solitarios, poderosos y adaptables, habitan bosques, montañas y ríos, donde desarrollan complejas interacciones sociales y buscan su alimento según la estación. A través de documentales y relatos cercanos, podemos observar su comportamiento de manera única, siempre manteniendo su naturaleza salvaje.</p>

            <section className="grid grid-cols-2 gap-6">
                {sobreEllosData.map((data) => (
                    <SobreEllosItem key={data.number} data={data} />
                ))}
            </section >
        </div >
    );
}

export default SobreEllos;