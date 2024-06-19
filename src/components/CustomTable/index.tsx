import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';
import { StatusTag } from '../StatusTag';

export const statusMap = {
  SUCCESSFUL: 'Completed',
  SUCCESS: 'Completed',
  Successful: 'Completed',
  PENDING: 'Pending',
  Pending: 'Pending',
  FAILED: 'FAILED',
  Failed: 'Failed',
  PROCESSING: 'PROCESSING',
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
  REVERSAL: 'REVERSAL',
  NOACTION: 'NOACTION'
};

export type HeadersPropsType = {
  title: string;
  responseMatch: string;
};

export interface TablePropsType<T> {
  data: Array<T>;
  length?: number;
  headers: Array<HeadersPropsType>;
  emptyLayout?: React.ReactNode;
  tableWrapperClassName?: string;
  onRowClick?: (row: T) => void;
}

export const CustomTable = <T,>(props: TablePropsType<T>) => {
  const { data, headers, emptyLayout, tableWrapperClassName, onRowClick, length = 20 } = props;

  return (
    <div className={`${tableWrapperClassName ?? ''} rounded-[10px] table-wrapper`}>
      <div className='w-full '>
        <div className='w-full bg-white flex justify-between border-[#E4E4E7] border-solid px-5 border-y-[1px]  py-[12px]'>
          {headers.map(({ responseMatch, title }) => (
            <span
              className='text-left font-semibold text-[11px] uppercase w-[20%] leading-normal text-[#6F7482]'
              key={responseMatch}
            >
              {title}
            </span>
          ))}
        </div>
        <div className='w-full flex flex-col bg-[#FFFFFF]'>
          {data.length
            ? data.map((item: T, index) => {
                if (index < length) {
                  return (
                    <div
                      key={uuidv4()}
                      className='cursor-pointer flex justify-between px-5 py-5 border-b-[1px] border-[#E4E4E7] border-solid'
                      onClick={() => (onRowClick ? onRowClick(item) : {})}
                    >
                      {headers
                        .map((headerItem: HeadersPropsType) => headerItem.responseMatch)
                        .map((value: string) => {
                          // @ts-ignore
                          if (Object.keys(statusMap).includes((item as any)[value])) {
                            // @ts-ignore
                            return (
                              <div key={(item as any)[value]} className='w-[20%]'>
                                <StatusTag
                                  // @ts-ignore
                                  type={statusMap[item[value]]}
                                />
                              </div>
                            );
                          } else {
                            return (
                              <span
                                className='text-[#444] w-[20%] font-medium overflow-hidden text-ellipsis text-[13px] whitespace-nowrap'
                                data-value={[(item as any)[value]]}
                                key={value}
                              >
                                {(item as any)[value]}
                              </span>
                            );
                          }
                        })}
                    </div>
                  );
                } else {
                  return null;
                }
              })
            : null}
        </div>
      </div>
      {!data.length && emptyLayout}
    </div>
  );
};
