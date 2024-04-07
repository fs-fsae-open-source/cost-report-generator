import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FastenerType } from "../../models/part";
import { useAppSelector } from "../../app/hooks";


interface FastenerTypeLibraryProperties {
    addFastenerCallback?(fastenerType: FastenerType): void;
}

export function FastenerTypeLibrary(props: FastenerTypeLibraryProperties) {

    const fastenerTypesStore = useAppSelector((state) => state.crg.fastenerTypes);
    const fastenerTypes: FastenerType[] = Object.values(fastenerTypesStore).map((item, index) => {
        return item;
    });


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