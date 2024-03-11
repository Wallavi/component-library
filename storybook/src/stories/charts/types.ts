export interface CircularChartData {
  label: string;
  value: number;
}

export interface DataObject {
  date: Date | string;
  value: number;
}

export interface BarsChartData {
  date: Date;
  value: number;
}

export interface CardData {
  label: string;
  value: string;
  percent: number;
  subLabel: string;
  icon: string;
}
