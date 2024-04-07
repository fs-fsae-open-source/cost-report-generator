import { useState } from "react";
import { Form } from "react-bootstrap";

interface GenericTableCellProperties {
    editable?: boolean
    value: string
    onValueUpdate?(value: string): void;
}

export function GenericTableCell(props: GenericTableCellProperties) {
    const editable = props.editable ?? false;

    const value = props.value;

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
            {editable ?
                <Form.Control
                    value={value}
                    plaintext={!editable}
                    onChange={(e) => update(e.target.value)}
                />
                : <>{value}</>
            }

        </td>
    );
}

