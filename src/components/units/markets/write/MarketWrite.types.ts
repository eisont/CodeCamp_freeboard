// 중고마켓 등록 types

import { ChangeEvent, SetStateAction } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

// container 타입
export interface IMarketWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateMarketInput {
  title?: String;
  contents?: String;
  youtubeUrl?: String;
  boardAddress?: {
    zipcode?: String;
    address?: String;
    addressDetail?: String;
  };
  images?: string[];
}

// presenter 타입
export interface IMarketWriteUIProps {
  isEdit: any;
  // is변수
  isOpen: boolean;
  value: string;
  fileUrls: string[];
  address: string;
  data: any;
  addressDetail: any;
  isActive: boolean;
  hashArr: string[];

  onChangeContents: (value: string) => void;
  onChangeTags: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  onChangeAddress: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  // Modal
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  // Click
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSubmit: (data: any) => Promise<void>;
  onClickUpdate: () => void;
  register: UseFormRegister<FieldValues>;
}

// style 타입
export interface ISubmitButtonsProps {
  isActive: boolean;
}
