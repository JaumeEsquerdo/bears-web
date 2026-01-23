import { FooterContenido } from "./FooterContenido";

type Props = {
    children: React.ReactNode

}
export const Contenido = ({ children }: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-between w-full min-h-screen p-8 overflow-hidden">

            <div className="w-3/5 h-full">
                {children}
            </div>
            <FooterContenido />
        </div>
    );
}