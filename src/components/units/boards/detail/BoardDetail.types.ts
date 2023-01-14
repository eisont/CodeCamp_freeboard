import { IQuery } from "../../../../../path/to/types/generated/types";

export interface IPropsPre {
  loggedUser: IQuery | undefined;
  fetchBoardData: Pick<IQuery, "fetchBoard"> | undefined;
  ImageCheck: string[] | undefined;
  onClickLikeCount: () => void;
  onClickDisLikeCount: () => void;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDelete: () => Promise<void>;
}
