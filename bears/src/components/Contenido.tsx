import { FooterContenido } from "./FooterContenido";

type Props = {
    children: React.ReactNode

}
export const Contenido = ({ children }: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-blue-300">

            <div >
                {children}
            </div>
            <FooterContenido />
        </div>
    );
}