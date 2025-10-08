import { useState } from 'react';
import { DropdownSvg } from './DropdownSvg';

function Dropdown({opcionSelecionada}) {
    const options = ['Mas relevantes','Menor Precio','Mayor Precio']
    const [dropdown, setDropdown] = useState({
        open:false,
        optionsSelected: options[0],
    });

    const handleOptionClick = (order) => {
        setDropdown({ optionsSelected: order, open: false });
        if (opcionSelecionada) {
            opcionSelecionada(order);
        }
    };

    return(
        <div className="containerDrop">
            <p>Ordenar por:</p>
            <div className="dropdown">
                <div 
                    onClick={() => setDropdown({...dropdown, open: !dropdown.open})}
                    className={dropdown.open ? "first-option-open" : "first-option-close"}
                >
                    <span>{dropdown.optionsSelected}</span>
                    <DropdownSvg />
                </div>
                {dropdown.open && (
                    <div className="options">
                        {options.map((order) => {
                            return (
                                <div 
                                    key={order}
                                    onClick={() => handleOptionClick(order)}
                                    className={dropdown.optionsSelected === order ? "orderSelected" : "order"}
                                >
                                    {order}
                                </div>
                            )
                        } )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;