export interface AppState {
  internetState: boolean;
  token?: string;
  loadingApp: boolean;
  showDialog: boolean;
  theme: AppThemeMode;
}

export enum AppThemeMode {
  DARK,
  LIGHT,
}
