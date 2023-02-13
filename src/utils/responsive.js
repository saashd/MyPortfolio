const size = {
    mobile: '767px',
    tabletS: '768px',
    tabletL: '991px',
    desktop: '992px'
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletL: `(max-width: ${size.tabletL})`,
    desktop: `(min-width: ${size.desktop})`,
};