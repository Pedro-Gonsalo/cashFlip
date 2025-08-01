// src/types/history.ts
import type { ConvertResult } from '@/types/currency';

export interface HistoryItem extends ConvertResult {
    id: string;
    timestamp: number;
}

export interface TableField {
    key: string;
    label?: string;
    sortable?: boolean;
    class?: string;
    tdClass?: string;
    thStyle?: string | object;
    thClass?: string;
    isRowHeader?: boolean;
    formatter?: Function;
}