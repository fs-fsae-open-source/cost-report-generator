import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FastenerType } from "../../models/part";


const fastenerTypes: FastenerType[] = [
    { fastener: "Steel Loop Straps, Rubber-Cushioned", comment: "Comment" },
    { fastener: "Galvanized Steel Loop Straps", comment: "Comment" }
];

interface FastenerTypeLibraryProperties {
    addFastenerCallback?(fastenerType: FastenerType): void;
}

export function FastenerTypeLibrary(props: FastenerTypeLibraryProperties) {

    const columns: string[] = [
        "Fastener",
        "Comment"
    ];

    const rowData = fastenerTypes.map((item, index) => {
        return (
            <tr key={index}>
                {columns.map((colItem, colIndex) => {
                    return (
                        <td key={colIndex}>
                            {item[colItem.toLowerCase() as keyof typeof item] as string ?? ""}
                        </td>)
                })
                }
                <td>
                    <Button onClick={() => {
                        if (props.addFastenerCallback) {
                            props.addFastenerCallback(item)
                        }
                    }}>
                        Add
                    </Button>
                </td>
            </tr>
        )
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3>
                        Fastener Library
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table bordered>
                        <thead>
                            <tr>
                                {columns.map((item, index) => {
                                    return (
                                        <td key={index}>{item}</td>
                                    )
                                })}
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className={"text-left"}>
                            {rowData}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}