const getCSS = (variavel) => {
    const bodyStyle = getComputedSyle (document.bod)
    return bodyStyles.getPropertyValue(variavel)
}

 const tickConfig= {
    family: getCSS('--font'),
    size: 16,
    clor: getCSS('--primary-color')
 }

  export { getCSS, tickConfig}