import { Col, Container, Row } from "react-bootstrap";
import { Fastener, FastenerType } from "../models/part";
import { GenericTable } from "./generic/GenericTable";
import { useState } from "react";
import { FastenerTypeLibrary } from "./Fastener/FastenerTypeLibrary";
import { FastenerTable } from "./Fastener/FastenerTable";

interface FastenerEditorProperties {

}

const fastenerTypes: FastenerType[] = [
    { description: "Steel Loop Straps, Rubber-Cushioned", comment: "Comment" },
    { description: "Galvanized Steel Loop Straps", comment: "Comment" }
];


export function FastenerEditor(props: FastenerEditorProperties) {
    const typeKeys = [
        "description"
    ];

    const fastenerKeys = [
        "use",
        "quantity",
        "description"
    ];

    interface FastenerViewerItem {
        description: string;
        use: string;
        quantity: number;
    }

    const [fasteners, setFasteners] = useState<Fastener[]>([]);

    console.log("fasteners", fasteners);

    const fastenerData: FastenerViewerItem[] = fasteners.map((item, index) => {
        return {
            description: item.type.description,
            use: item.use,
            quantity: item.quantity
        }
    })

    function fastenerViewerClickHandler(action: string, data: FastenerViewerItem, index: number) {
        if (action === "Remove") {
            const newData = fasteners.slice(0, index).concat(fasteners.slice(index + 1));
            console.log(index, newData)
            setFasteners(newData);
        }
    }

    function fastenerLibraryClickHandler(action: string, data: FastenerType, index: number) {
        if (action === "Add") {
            const newFastener: Fastener = {
                use: "",
                quantity: 0,
                type: data
            };
            setFasteners([...fasteners, newFastener]);
        }
    }

    function updateFastenerCallback(index: number, data: Fastener) {
        setFasteners(value => {
            return value.flatMap((item, idx) => {
                if (idx == index) {
                    if (data === null) {
                        // remove this item
                        return [];
                    } else {
                        // replace it with the new data
                        return data;
                    }
                } else {
                    // keep existing item
                    return item;
                }
            })
        })
    }

    function addFastener(data: FastenerType) {
        const newFastener: Fastener = {
            use: "",
            quantity: 0,
            type: data
        };
        setFasteners([...fasteners, newFastener]);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3>Fasteners</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FastenerTable data={fasteners} updateFastenerCallback={updateFastenerCallback} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FastenerTypeLibrary addFastenerCallback={addFastener} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h3>Fastener Library</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <GenericTable keys={typeKeys} data={fastenerTypes} buttons={["Add"]} buttonCallback={fastenerLibraryClickHandler} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}