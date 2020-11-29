import React from 'react';
import { TableWrapper, CalculatedValue, Table, THead } from './styles';

const OHLCTable: React.FunctionComponent<any> = () => {
    return (
        <TableWrapper>
            <div>
                <CalculatedValue>Max H: 1.8967746</CalculatedValue>
                <CalculatedValue>Lowest L: 1.4965236</CalculatedValue>
            </div>
            <Table>
                <THead>
                    <tr style={{height: '30px'}}>
                        <th>O</th>
                        <th>H</th>
                        <th>L</th>
                        <th>C</th>
                    </tr>
                </THead>
                <tbody>
                    <tr>
                        <td>1.4325</td>
                        <td>1.54367</td>
                        <td>1.34556758</td>
                        <td>1.98646</td>
                    </tr>
                    <tr>
                        <td>1.4325</td>
                        <td>1.54367</td>
                        <td>1.34556758</td>
                        <td>1.98646</td>
                    </tr>
                    <tr>
                        <td>1.4325</td>
                        <td>1.54367</td>
                        <td>1.34556758</td>
                        <td>1.98646</td>
                    </tr>
                    <tr>
                        <td>1.4325</td>
                        <td>1.54367</td>
                        <td>1.34556758</td>
                        <td>1.98646</td>
                    </tr>
                    <tr>
                        <td>1.4325</td>
                        <td>1.54367</td>
                        <td>1.34556758</td>
                        <td>1.98646</td>
                    </tr>
                </tbody>
            </Table>
        </TableWrapper>
    )
}

export default OHLCTable;
