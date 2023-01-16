import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../../path/to/types/generated/types";

// ===============================================================

export interface IPropsCon {
  isEdit?: Boolean;
  fetchBoardData?: Pick<IQuery, "fetchBoard"> | undefined;
}
export interface IAddressData {
  address: string;
  zonecode: string;
}
export interface IData {
  password?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  addressDetail?: string;
}

// ===============================================================
export interface fileType {
  fileUrl: string[] | undefined;
}

export interface IPropsPre {
  isActive: Boolean;
  isOpen: Boolean;
  isEdit: Boolean;
  address: string;
  zonecode: string;
  fetchBoardData: Pick<IQuery, "fetchBoard"> | undefined;
  fileUrls: string[];
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onChangeFileUrls: (fileUrl: fileType, index: number) => void;
  onClickSubmit: (data: IData) => Promise<void>;
  onClickUpdate: (data: IData) => Promise<void>;
  onClickBack: () => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: IAddressData) => void;
}
