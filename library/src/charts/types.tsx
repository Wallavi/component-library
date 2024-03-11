import { SvgIconComponent } from "@mui/icons-material";

export interface Padding {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

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
  icon: SvgIconComponent;
  iconTheme: string;
  onclick?: () => void;
}

export interface Seller {
  name: string;
  sells: number;
  percent: number;
}

export interface City {
  name: string;
  value: number;
}
