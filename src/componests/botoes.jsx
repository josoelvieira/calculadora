import "./botoes.css";

export default function(props) {
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={props.classBtn}
        >
            {props.label}
        </button>
    );
};
