/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

export const px2vw = (size, width = 1920) => `${(size / width) * 100}vw`
export const desktopPx2vw = px => px2vw(px, 1920)
