import style from './style.module.css';

type GaugeProps = {
  label: string;
  percent: number;
};

export default function Gauge({ label, percent }: GaugeProps) {
  return (
    <div className={style.container}>
      <h3>{label} HP</h3>
      <div className={`border border-3 border-warning ${style.gauge}`}>
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
    </div>
  );
}
