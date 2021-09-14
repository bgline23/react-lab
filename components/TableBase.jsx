import React from "react";

const defaultProps = {
    formatters: {},
    columns: {},
    rows: [],
    onRowClick: () => { },
};

let keyCounter = 1;
const TableBase = ({ columns, rows, formatters, onRowClick }) => {
    const onClick = (e) => {
        e.preventDefault();
        onRowClick(e);
    };

    return (
        <table>
            <thead>
                <tr>
                    {Object.entries(columns).map(([prop, val]) => (
                        <th key={keyCounter++}>{val}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rows?.map((row, index) => (
                    <tr key={keyCounter++}>
                        {Object.entries(columns).map(([colName]) => {
                            if (row.hasOwnProperty(colName)) {
                                const fmtFunc = formatters[colName];
                                let cellValue = row[colName];
                                cellValue = fmtFunc ? fmtFunc(row[colName]) : cellValue;
                                return (
                                    <td
                                        onClick={onClick}
                                        data-row-index={index}
                                        key={keyCounter++}
                                    >
                                        {cellValue}
                                    </td>
                                );
                            }

                            return null;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TableBase.defaultProps = defaultProps;

export default TableBase;