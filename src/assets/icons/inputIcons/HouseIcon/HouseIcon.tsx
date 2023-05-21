import { ClassName } from "../../../../types"
import { ContainerForInputIcon } from "../ContainerForInputIcon"

export const HouseIcon = (props:ClassName) => {
  return(
    <ContainerForInputIcon className={props.className}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.85108 15.58V13.2867C6.85108 12.7013 7.32913 12.2267 7.91883 12.2267H10.0745C10.3576 12.2267 10.6292 12.3384 10.8295 12.5372C11.0297 12.736 11.1422 13.0056 11.1422 13.2867V15.58C11.1404 15.8234 11.2365 16.0574 11.4093 16.2301C11.582 16.4029 11.817 16.5 12.0622 16.5H13.5329C14.2197 16.5018 14.8791 16.2321 15.3654 15.7506C15.8517 15.2691 16.125 14.6152 16.125 13.9334V7.40014C16.125 6.84935 15.8791 6.32688 15.4535 5.9735L10.4505 2.0069C9.58025 1.31142 8.33333 1.33388 7.48904 2.06023L2.60026 5.9735C2.15456 6.31646 1.88816 6.84048 1.875 7.40014V13.9267C1.875 15.3479 3.03554 16.5 4.46713 16.5H5.90422C6.41342 16.5 6.82725 16.0922 6.83094 15.5867L6.85108 15.58Z" fill="#3F260A"/>
      </svg>
    </ContainerForInputIcon>
  )
}