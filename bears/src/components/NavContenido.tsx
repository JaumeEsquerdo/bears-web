
type NavContenidoProps = {
    isOpen: boolean;
};

export const NavContenido = ({ isOpen }: NavContenidoProps) => {

    return (
        <nav className={`${isOpen ? 'z-40' : ''} fixed flex flex-col gap-5 pointer-events-auto top-1/20 left-1/12`}>
            <a className="text-2xl cursor-pointer" href="#">Historia</a>
            <a className="text-2xl" href="#">Sobre ellos</a>
        </nav>
    );
}
