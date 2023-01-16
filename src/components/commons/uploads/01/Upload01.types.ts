import { MutableRefObject } from "react";
import { fileType } from "../../../units/boards/write/BoardWrite.types";

export interface IPopsCon {
  index: number;
  fileUrl: string;
  onChangeFileUrls?: (fileUrl: fileType, index: number) => void;
  defaultFileUrl?: any;
}

// =================================================================

export interface IPropsPr {
  fileRef: MutableRefObject<undefined>;
  fileUrl: string;
  defaultFileUrl?: any;
  onClickUpload: () => void;
  onChageFile: (event: any) => Promise<void>;
}
