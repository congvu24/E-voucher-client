/* SystemJS module definition */
declare const nodeModule: NodeModule;
interface NodeModule {
  id: string;
}
interface Window {
  process: any;
  require: any;
}

/* app types */
declare type UniqueId = string;
declare type DateTimeString = string;
declare type Email = string;
declare type UUID = string;
declare type UserRoute = { iconType: string; path: string };
