import styled from "@emotion/styled";
import { injectGlobal } from '@emotion/css'


injectGlobal `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`


export const Wrapper = styled.div`
    padding: 64px 340px 0;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const BoardNewTable = styled.div`
    width: 1200px;

    padding: 80px 102px;
    flex-direction: column;
    align-items: center;
    border: 1px solid #bdbdbd;
    box-shadow: 0px 0px 10px #bdbdbd;
`;


export const Header = styled.div`
    width: 996px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;

    display: flex;
    justify-content: space-between;
`;


export const UserInformation = styled.div`
    display: flex;
    align-items: center;
`;
export const UserProfilePhoto = styled.img`
    height: 47px;
    margin-right: 20px;
`;
export const UserProfile = styled.div`
`;
export const UserName = styled.div`
    font-size: 24px;
    font-weight: 900;
`;
export const UpdateTime = styled.div`
    color: #828282; 
`;

export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
`;
export const SharingImg = styled.img`
    width: 27px;
    margin-right: 20px;
    cursor: pointer;
`;
export const LotationImg = styled.img`
    height: 27px;
    cursor: pointer;
`;


export const Section = styled.div`
    width: 996px;
`;

export const SectionText = styled.div`
    margin: 80px 0 40px;

    font-weight: 900;
    font-size: 36px;
    &:hover {
        background: #bdbdbd;
        color: #fff;
    }
`;
export const SectionPhoto = styled.img`
    width: 996px;
    object-fit: contain;
`;
export const SectionContent = styled.p`
    font-size: 16px;
    margin: 40px 0 0 0;
`;

export const SectionVideoBox = styled.div`
    width: 996px;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SectionVideoURL = styled.iframe`
    width: 486px;
    height: 240px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // border: 1px solid #bdbdbd;
`;
export const SectionVideoImg = styled.img`
    width: 48px;
`;


export const LikeButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LikeButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    cursor: pointer;
    
    &:active {
        background: #bdbdbd
`;
export const LikeButtonImg = styled.img`
    width: 22px;
`;
export const LikeNumber = styled.p`
    font-size: 18px;
    color: #ffd600;
`;

export const DisLikeButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    
    &:active {
        background: #bdbdbd
`;
export const DisLikeButtonImg = styled.img`
    width: 22px;
`;
export const DisLikeNumber = styled.p`
    font-size: 18px;
    color: #828282;
`;


export const MenuButtons = styled.div`
    display: flex;
`;
export const SubmitButton = styled.button`
    width: 180px;
    height: 45px;
    margin: 87px 12px;

    font-size: 16px;
    font-weight: 600;
    display: inline;
    background: #fff;
    border: 1px solid #bdbdbd;

    &:hover {
        border: 3px solid #bdbdbd
    }
`;


export const WrapperHr = styled.div`
    width: 1200px;
    height: 1px;
    background: #bdbdbd;
`;
