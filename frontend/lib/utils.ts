import { type ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export async function openDB(objectStoreName: string, mode: IDBTransactionMode) {
  return new Promise<IDBObjectStore | null>((resolve, reject) => {
    const request = indexedDB.open('universal', 1);
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(objectStoreName, mode);
      const store = tx.objectStore(objectStoreName);
      resolve(store);
    };
    request.onerror = () => reject(null);
    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore('network');
      db.createObjectStore('files');
    };
  });
}

export function idbRequestToPromise<T>(request: IDBRequest<T>) {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export function idbTransactionDone(transaction: IDBTransaction) {
  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error);
    transaction.onerror = () => reject(transaction.error);
  });
}

/**
 * Gives array of unique values
 * @param arr
 * @returns
 */
export function distinct<T>(arr: T[]): Array<T> {
  return Array.from(new Set(arr));
}

/**
 * Formats bytes to human readable format
 * @param bytes Number of bytes
 * @param decimals Number of decimal places
 * @returns Formatted string
 */
export function formatBytes(bytes: number | string, decimals = 2): string {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(+bytes) / Math.log(k));
  return `${Number.parseFloat((+bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export enum Events {
  ALGORITHM = 'algorithm',
  ALGORITHM_RESULTS = 'algorithm-results',
  EXPORT = 'export',
  VISIBLE_NODES = 'visible-nodes',
  VISIBLE_NODES_RESULTS = 'visible-nodes-results',
}
export type EventMessage = {
  [Events.ALGORITHM]: {
    name: string;
    parameters?: Record<string, string>;
  };
  [Events.EXPORT]: {
    format: 'png' | 'csv';
    all?: boolean;
    csvType?: 'universal' | 'interaction' | 'both';
  };
  [Events.ALGORITHM_RESULTS]: {
    modularity?: number;
    communities?: Array<{
      name: string;
      nodes: string[];
      color: string;
      percentage: string;
      averageDegree: string;
      degreeCentralNode: string;
    }>;
    resolution?: number;
    dwpcScore?: number;
    pathCount?: number;
    paths?: Array<{
      nodes: string[];
      labels: string[];
      weight?: number;
      length?: number;
      nodeTypes?: string[];
    }>;
    metapath?: string[];
    allMetapaths?: string[][];
    damping?: number;
    timedOut?: boolean;
    minHopsNeeded?: number;
    subgraphNodeCount?: number;
    subgraphEdgeCount?: number;
    depth?: number;
  };
  [Events.VISIBLE_NODES_RESULTS]: {
    visibleNodeGeneIds: Set<string>;
  };
};

export function envURL(env?: string) {
  return (env || 'https://tbep.missouri.edu').replace(/\/$/, '');
}

export function initRadioOptions() {
  return {
    DEG: [],
    Pathway: [],
    Druggability: [],
    TE: [],
    Custom_Color: [],
    OpenTargets: [],
    OT_Prioritization: [],
  };
}


