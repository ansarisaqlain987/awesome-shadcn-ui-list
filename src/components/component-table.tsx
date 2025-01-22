"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useToast } from "@/hooks/use-toast";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type ISectionItem } from "@/lib/data";
import { Copy, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const copyValue = (value: string) => {
  navigator.clipboard.writeText(value);
};

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function ComponentsTable({ data }: { data: ISectionItem[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const { toast } = useToast();
  const onCopyClick = (val: string) => {
    copyValue(val);
    toast({
      title: "URL Copied...",
      description: val,
    });
  };

  const columns: ColumnDef<ISectionItem>[] = React.useMemo(
    () => [
      {
        accessorKey: "sectionName",
        header: "Section",
        size: 30,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 40,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
      },
      {
        accessorKey: "link",
        header: "Link",
        size: 25,
        meta: {
          center: true,
        },
        cell: ({ row }) => {
          return (
            <div className="flex items-center">
              <Link href={row.original.link} prefetch={true} target="_blank">
                <Button variant={"ghost"}>
                  <SquareArrowOutUpRight />
                </Button>
              </Link>
              <Button
                variant={"ghost"}
                onClick={() => onCopyClick(row.original.link)}
              >
                <Copy />
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      // rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: data.length,
        pageIndex: 0,
      },
    },
  });

  return (
    <div className="w-full">
      <DebouncedInput
        value={globalFilter ?? ""}
        onChange={(value) => setGlobalFilter(String(value))}
        className="p-2 font-lg border border-block focus-visible:ring-0 mb-4"
        placeholder="Search all columns..."
        debounce={300}
      />
      <div className="rounded-md border w-full max-h-[70vh] overflow-y-auto">
        <Table className="w-full" style={{ tableLayout: "fixed" }}>
          <TableHeader className="w-full">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-muted font-bold sticky left-0 z-30"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={"font-bold"}
                      style={{ overflow: "hidden", width: header.getSize() }}
                    >
                      {header.column.columnDef.header?.toString()}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
