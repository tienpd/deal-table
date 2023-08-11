'use client'

import {ColumnFiltersState, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {columns, data} from "@/app/_components/column-def";
import {useState} from "react";

export default function Home() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )

    console.log('columnFilters', columnFilters)
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
    })

    return (
        <main>
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    )
}
