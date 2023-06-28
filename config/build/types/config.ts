export type BuildMide = 'production' | 'development';

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMide;
  paths: BuildPath;
  isDev: boolean;
}