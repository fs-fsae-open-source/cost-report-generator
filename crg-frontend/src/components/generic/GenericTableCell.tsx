import { useState } from "react";
import { Form } from "react-bootstrap";

interface GenericTableCellProperties {
    editable?: boolean
    value: string
    onValueUpdate?(value: string): void;
}

export function GenericTableCell(props: GenericTableCellProperties) {
    const editable = props.editable ?? false;

    const [value, setValue] = useState<string>(props.value);

    function update(data: string) {
        if (editable) {
            // TODO: this is where input validation could be performed

            if (props.onValueUpdate) {
                props.onValueUpdate(data);
            }
        }

    }


    return (
        <td>
            <Form.Control
                value={editable ? value : props.value}
                plaintext={!editable}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => update(value)}
            />
        </td>
    );
}

