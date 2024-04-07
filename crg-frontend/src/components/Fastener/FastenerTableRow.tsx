import { useState } from "react";
import { Fastener } from "../../models/part";
import { ColumnInformation } from "../../models/table";
import { GenericTableCell } from "../generic/GenericTableCell";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeFastener, updateFastener, updateFastenerField } from "../../slices/crgSlice";

interface FastenerTableRowProperties {
    value: Fastener
    index: number
    columnInfo: ColumnInformation[]
    updateFastener?(index: number, value: Fastener | null): void
}

export function FastenerTableRow(props: FastenerTableRowProperties) {
    const columnInfo = props.columnInfo;

    const value = props.value;

    const fastenerTypesStore = useAppSelector((state) => state.crg.fastenerTypes);
    const dispatch = useAppDispatch();


    const fastenerType = (value.typeID in fastenerTypesStore) ? fastenerTypesStore[value.typeID] : null;

    const displayData = { ID: value.id, Name: fastenerType?.fastener ?? "", Use: value.use };

    function remove() {
        dispatch(removeFastener(value.id));
    }

    function updateField(fieldValue: string, key?: string) {
        console.log("updateField", fieldValue, key);
        const newItem: Fastener = { ...value } as Fastener;
        if (key) {
            dispatch(updateFastenerField({ id: value.id, key: key, value: fieldValue }));
            console.log("key", value[key as keyof typeof value])
            newItem[key as keyof typeof newItem] = fieldValue;
        }
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
                <Button onClick={remove}>Remove</Button>
            </td>
        </tr>
    );
}