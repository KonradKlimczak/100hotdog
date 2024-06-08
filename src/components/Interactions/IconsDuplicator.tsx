import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import { createIndexArray } from '@/helpers/array';

type IconsDuplicatorProps = {
  times: number;
  size: number;
  src: ImageProps['src'];
};

export const IconsDuplicator = (props: IconsDuplicatorProps) => {
  const { src, times: initialTimes, size } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const times = Math.min(initialTimes, 101);

  const [width, setWidth] = useState(0);

  const items = createIndexArray(times);

  useEffect(() => {
    setWidth(Math.floor(containerRef.current?.clientWidth ?? 0));
  }, []);

  const widthPerItem = Math.max(Math.floor(width / (times || 1)), 8);

  const scale = useMemo(() => {
    if (widthPerItem > size) {
      return 1;
    }
    return widthPerItem / size;
  }, [size, widthPerItem]);

  const itemsInOneRow = Math.floor(width / widthPerItem);

  const rows = useMemo(() => {
    if (itemsInOneRow === times) {
      return 1;
    }
    return Math.ceil(times / itemsInOneRow);
  }, [itemsInOneRow, times]);

  return (
    <div
      ref={containerRef}
      className={clsx('relative flex flex-1', {
        'items-center': rows === 1,
      })}
    >
      {items.map((item, index) => {
        const currentRow = Math.floor(index / itemsInOneRow);
        return (
          <div
            key={item}
            className="absolute"
            style={{
              top: rows !== 1 ? `${(100 / rows) * currentRow}%` : 'initial',
              left: Math.min((index % itemsInOneRow) * widthPerItem, (index % itemsInOneRow) * (size + 4)),
            }}
          >
            <Image src={src} alt="Mniam" width={scale * size} height={scale * size} />
          </div>
        );
      })}
    </div>
  );
};
