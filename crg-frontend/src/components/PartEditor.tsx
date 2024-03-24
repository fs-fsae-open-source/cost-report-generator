import { useState } from 'react'
import { Part } from '../models/part'
import { Col, Container, Row } from 'react-bootstrap'
import { FastenerEditor } from './FastenerEditor'


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
                <FastenerEditor />
            </Row>
        </Container>
    )
}