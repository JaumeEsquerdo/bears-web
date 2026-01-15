type Props = {
    children: React.ReactNode
}
export const Contenido = ({ children }: Props) => {
    return (
        <div className="">
            {children}
        </div>
    );
}