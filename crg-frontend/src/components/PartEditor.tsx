import { useState } from 'react'
import { Part } from '../models/part'
import { Col, Container, Row } from 'react-bootstrap'
import { ProcessEditor } from './ProcessEditor'


interface PartEditorProperties {
    part: Part
}

export function PartEditor(props: PartEditorProperties) {
    return (
        <Container fluid>
            <Row>
                <Col>Part:</Col>
                <Col>{props.part.name}</Col>
            </Row>
            <Row>
                <ProcessEditor />
            </Row>
        </Container>
    )
}