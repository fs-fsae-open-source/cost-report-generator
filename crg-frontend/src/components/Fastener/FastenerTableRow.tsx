import { useState } from "react";
import { Fastener } from "../../models/part";
import { ColumnInformation } from "../../models/table";
import { GenericTableCell } from "../generic/GenericTableCell";
import { Button } from "react-bootstrap";

interface FastenerTableRowProperties {
    value: Fastener
    index: number
    columnInfo: ColumnInformation[]
    updateFastener?(index: number, value: Fastener | null): void
}

export function FastenerTableRow(props: FastenerTableRowProperties) {
    const columnInfo = props.columnInfo;

    const value = props.value;

    // const [value, setValue] = useState<Fastener>(props.value);


    const displayData = { Name: value.type.fastener, Use: value.use };

    function remove() {
        console.log("remove", value);
        props.updateFastener?.(props.index, null);
    }

    function update() {
        console.log("update", value);
        props.updateFastener?.(props.index, value);
    }

    function updateField(fieldValue: string, key?: string) {
        console.log("updateField", fieldValue, key);
        const newItem: Fastener = { ...value } as Fastener;
        if (key) {
            newItem[key as keyof typeof newItem] = fieldValue;
        }

        props.updateFastener?.(props.index, newItem);

        // setValue(newItem);
    }

    return (
        <tr>
            {columnInfo.map((item, index) => {
                const key = item.name as keyof typeof displayData;
                const value = displayData[key] as string ?? "";

                return (
                    <GenericTableCell
                        key={index}
                        value={value}
                        editable={item.editable}
                        onValueUpdate={(newValue) => {
                            updateField(newValue, item.key);
                        }}
                    />
                )
            })}
            <td>
                <Button onClick={update}>Update</Button>
            </td>
            <td>
                <Button onClick={remove}>Remove</Button>
            </td>
        </tr>
    );
}