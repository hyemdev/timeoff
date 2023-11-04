import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 10%;
  background: #006dab;
  border-color: none;
  border-bottom: 0.05rem solid #006dab;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .nav-link {
      li {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        background: 0;
        color: #fff;
        cursor: pointer;
        :hover {
          color: #ffef9e;
        }
      }
    }
    .nav-link-active {
      li {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        background: 0;
        color: #ffef9e;
        cursor: pointer;
      }
    }
  }
`;
