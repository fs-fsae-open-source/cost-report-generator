import { Form, Table } from "react-bootstrap";
import { Fastener } from "../../models/part";
import { GenericTableCell } from "../generic/GenericTableCell";
import { ColumnInformation } from "../../models/table";
import { FastenerTableRow } from "./FastenerTableRow";

interface FastenerTableProperties {
    data?: Fastener[]
    updateFastenerCallback?(index: number, data: Fastener | null): void;
}

export function FastenerTable(props: FastenerTableProperties) {

    const data = props.data ?? [];

    const columnInfo: ColumnInformation[] = [
        { name: "Name", editable: false },
        { name: "Use", editable: true, key: "use" }
    ]

    console.log("data", data);

    return (
        <Table bordered>
            <thead>
                <tr>
                    {columnInfo.map((item, index) => {
                        return (
                            <td key={index}>
                                {item.name}
                            </td>
                        )
                    })}
                </tr>

            </thead>
            <tbody>
                {data.map((item, index) => {
                    console.log("item", index, item);
                    return (
                        <FastenerTableRow
                            key={item}
                            index={index}
                            value={item}
                            columnInfo={columnInfo}
                            updateFastener={props.updateFastenerCallback}
                        />
                    )
                })}
            </tbody>
        </Table>
    );
}