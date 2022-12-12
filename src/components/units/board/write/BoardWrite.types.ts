// 게시판 등록 types

import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// container 타입
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
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
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  // Modal
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  // Click
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  // State 변수
  data?: Pick<IQuery, "fetchBoard">;
  // is변수
  isActive: any;
  isOpen: boolean;
  isEdit: boolean;
  fileUrls: string[];
  address: string;
  addressDetail: string;
}

// style 타입
export interface ISubmitButtonsProps {
  isActive: boolean;
}
