import { Button, Table } from "react-bootstrap";

interface GenericTableProperties<T> {
    keys: string[]
    data?: T[]
    buttons?: string[]
    buttonCallback?(button: string, item: T, index: number): void;
}

export function GenericTable<T>(props: GenericTableProperties<T>) {

    const data = props.data;
    const keys = props.keys;
    const buttons = props.buttons ?? [];

    const rows = data?.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                {
                    keys.map((keyItem, keyIndex) => {
                        return (
                            <td key={keyIndex}>{item[keyItem as keyof typeof item] as string ?? ""}</td>
                        )
                    })
                }
                {
                    buttons.map((buttonName, buttonIndex) => {
                        return (
                            <td key={buttonIndex}>
                                <Button onClick={() => {
                                    if (props.buttonCallback) {
                                        props.buttonCallback(buttonName, item, index)
                                    }
                                }}>{buttonName}</Button>
                            </td>
                        )
                    })
                }
                <td>{JSON.stringify(item)}</td>
            </tr>
        )
    });

    return (

        <Table bordered>
            <thead>
                <tr>
                    <td>Index</td>
                    {
                        keys.map((item, index) => {
                            return (
                                <td key={index}>{item}</td>
                            )
                        })
                    }
                    {
                        buttons.map((buttonName, buttonIndex) => {
                            return (
                                <td key={buttonIndex}>
                                </td>
                            )
                        })
                    }
                    <td>JSON</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </Table>
    );
}