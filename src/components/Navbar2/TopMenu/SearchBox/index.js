export default function ( props) {
    const styleClass= props.showDesktop ? "searchbox hidden md:flex" : "searchbox md:hidden flex";
    
    return <div className={styleClass}>
        <input  type="text" placeholder="Busca .." />
        <button className="searchbox-button">Buscar</button>
    </div>;
}