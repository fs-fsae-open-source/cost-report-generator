import { Col, Container, Row } from "react-bootstrap";
import { Fastener, FastenerType } from "../models/part";
import { GenericTable } from "./generic/GenericTable";
import { useState } from "react";
import { FastenerTypeLibrary } from "./Fastener/FastenerTypeLibrary";
import { FastenerTable } from "./Fastener/FastenerTable";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { addFastener } from "../slices/crgSlice";

interface FastenerEditorProperties {

}

export function FastenerEditor(props: FastenerEditorProperties) {

    const fasteners = useAppSelector((state) => state.crg.currentPart.fasteners);

    const dispatch = useAppDispatch();


    const fastenerData: Fastener[] = Object.values(fasteners).flatMap((item, index) => {
        return item;
    });

    const typeKeys = [
        "fastener"
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

    console.log("fasteners", fasteners);


    function fastenerViewerClickHandler(action: string, data: FastenerViewerItem, index: number) {
        // if (action === "Remove") {
        //     const newData = fasteners.slice(0, index).concat(fasteners.slice(index + 1));
        //     console.log(index, newData)
        //     setFasteners(newData);
        // }
    }

    function fastenerLibraryClickHandler(action: string, data: FastenerType, index: number) {
        if (action === "Add") {

            // const newFastener: Fastener = {
            //     use: "",
            //     quantity: 0,
            //     type: data
            // };
            // setFasteners([...fasteners, newFastener]);
        }
    }

    function updateFastenerCallback(index: number, data: Fastener) {
        // setFasteners(value => {
        //     return value.flatMap((item, idx) => {
        //         if (idx == index) {
        //             if (data === null) {
        //                 // remove this item
        //                 return [];
        //             } else {
        //                 // replace it with the new data
        //                 return data;
        //             }
        //         } else {
        //             // keep existing item
        //             return item;
        //         }
        //     })
        // })
    }

    function addFastenerCallback(data: FastenerType) {
        dispatch(addFastener(data.id));
        console.log(addFastener(data.id))
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
                    <FastenerTable data={fastenerData} updateFastenerCallback={updateFastenerCallback} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FastenerTypeLibrary addFastenerCallback={addFastenerCallback} />
                </Col>
            </Row>
        </Container>
    )
}