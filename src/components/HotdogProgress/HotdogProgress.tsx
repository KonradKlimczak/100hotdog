import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export const HotdogProgress = () => {
  return (
    <div className='flex flex-1 items-center flex-col gap-2'>
      Zjedzonych
      <div className="bg-[#F2D479]">
        <Gauge
          width={100}
          height={100}
          value={60}
          valueMax={101}
          sx={() => ({
            [`& .${gaugeClasses.valueArc}`]: {
              fill: '#B94700',
            },
          })}
        />
      </div>
    </div>
  );
};
