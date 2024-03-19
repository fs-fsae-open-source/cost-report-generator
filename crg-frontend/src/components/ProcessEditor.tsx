import { useState } from 'react'
import { Part } from '../models/part'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'


interface ProcessEditorProperties {

}

export function ProcessEditor(props: ProcessEditorProperties) {
    let [processes, setProcesses] = useState<string[]>(["process1"]);
    let [counter, setCounter] = useState<number>(1);

    return (
        <Container fluid>
            <Row>
                <Col>Processes</Col>
            </Row>
            <Row>
                <Button onClick={() => {
                    let newCount = counter + 1;
                    setCounter(newCount);

                    setProcesses(processes.concat(`process${newCount}`));
                }}>Add Process</Button>
            </Row>
            <Row>
                <Table>
                    {
                        processes.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>Process Name:</td>
                                    <td>{item}</td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </Row>

        </Container>
    )
}