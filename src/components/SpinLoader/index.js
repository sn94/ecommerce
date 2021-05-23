import './styles.css';

export default function SpinLoader({ mensaje = "Cargando" }) {
    return <div className="spin-loader">
        <span >{mensaje}</span>
        <div className="canvas">
            <div className="ball-1">

            </div>
            <div className="ball-2">

            </div>
        </div>

    </div>;
}