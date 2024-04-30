import {
  flexRender,
  getCoreRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';

import { EmptyResults } from '../EmptyResults';
import { Spinner } from '../Spinner';
import {
  PrimitiveTable,
  PrimitiveTableData,
  PrimitiveTableHeader,
  PrimitiveTableRow,
} from './atoms';
import { createColumnHelper } from './createColumnHelper';

export type ColumnData = {
  label: string;
};

export type TableProps<T> = {
  data: T[];
  columns: Record<keyof T, ColumnData>;
  isLoading: boolean;
};

export const Table = <T extends RowData>({
  data,
  columns,
  isLoading,
}: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();
  const table = useReactTable({
    columns: Object.entries<ColumnData>(columns).map(([key, column]) =>
      columnHelper.accessor(key as keyof T, {
        cell: row => row.getValue(),
        header: () => <span>{column.label}</span>,
      }),
    ),
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (!data.length && !isLoading) {
    return <EmptyResults />;
  }

  return (
    <PrimitiveTable>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <PrimitiveTableHeader key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </PrimitiveTableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <PrimitiveTableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <PrimitiveTableData key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </PrimitiveTableData>
            ))}
          </PrimitiveTableRow>
        ))}
      </tbody>
    </PrimitiveTable>
  );
};
