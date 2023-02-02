import React from "react";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell} from "@material-ui/core";

import Columns from "./columns.json";

const TableComponent:React.FC = () => {
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                            {Columns.columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="center"
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TableComponent;