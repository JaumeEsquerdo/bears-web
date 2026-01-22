

export const FooterContenido = () => {
    return (
        <footer className="w-3/5">
            <div className="flex justify-between w-full">

                <div className="flex gap-3">
                    <button className="cursor-pointer text-main">CRÉDITOS</button>
                    <button className="cursor-pointer text-main">LEGAL</button>
                </div>
                <a className="text-main" href="https://github.com/JaumeEsquerdo" target="_blank"
                    rel="noopener noreferrer">© creado por Jaume</a>
            </div>
        </footer>
    );
}

