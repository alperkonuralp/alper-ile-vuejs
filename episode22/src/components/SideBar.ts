export interface MenuItem {
  text: string;
  icon?: string;
  url?: string;
  onClick?: () => void;
}