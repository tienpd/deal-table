import {faker} from '@faker-js/faker';
import {createColumnHelper} from "@tanstack/table-core";

export type Deal = {
    name: string;
    status: 'draft' | 'publish' | 'unpublished' | 'cancelled';
    salonName: string;
    city: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
    expirationDate?: Date;
    sellOut: number;
    redemption: number;
}

const columnHelper = createColumnHelper<Deal>()

export const columns = [
    columnHelper.accessor('name', {
        id: "name",
        header: 'Name',
        cell: (row) => row.getValue(),
        enableColumnFilter: true,
    }),
    columnHelper.accessor('status', {
        id: "status",
        header: 'Status',
        cell: (row) => row.getValue(),
    }),
    columnHelper.accessor('salonName', {
        id: "salonName",
        header: 'Salon Name',
        cell: (row) => row.getValue(),
    }),
    columnHelper.accessor('city', {
        id: "city",
        header: 'City',
        cell: (row) => row.getValue(),
    }),
    columnHelper.accessor('state', {
        id: "state",
        header: 'State',
        cell: (row) => row.getValue(),
    }),
    columnHelper.accessor('createdAt', {
        id: "createdAt",
        header: 'Created At',
        cell: (row) => row.getValue()?.toString(),
    }),
    columnHelper.accessor('updatedAt', {
        id: "updatedAt",
        header: 'Updated At',
        cell: (row) => row.getValue()?.toString(),
    }),
    columnHelper.accessor('expirationDate', {
        id: "expirationDate",
        header: 'Expiration Date',
        cell: (row) => row.getValue()?.toString(),
    }),
    columnHelper.accessor('sellOut', {
        id: "sellOut",
        header: 'Sell Out',
        cell: (row) => row.getValue(),
    }),
    columnHelper.accessor('redemption', {
        id: "redemption",
        header: 'Redemption',
        cell: (row) => row.getValue(),
    }),
]

const dealData = (): Deal => ({
    name: faker.commerce.productName(),
    status: faker.helpers.shuffle<Deal['status']>(['draft', 'publish', 'unpublished', 'cancelled'])[0],
    salonName: faker.company.name(),
    city: faker.location.city(),
    state: faker.location.state(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    expirationDate: faker.date.future(),
    sellOut: faker.number.int({min: 0, max: 100}),
    redemption: faker.number.int({min: 0, max: 100}),
} as Deal);

export const data = Array.from({length: 100}, () => dealData());
