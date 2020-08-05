
const setLocalStorage = (key, value) =>{
    /**  for new LocalStorage
     * @param key => name coocki
     * @param value => value coocki
     * @param LSvalue => value from LocalStorage
     */
    //console.log('set LocalStorage import OK', value)
    var LSvalue = getLocalStorage(key);
    if ( LSvalue.includes(value) === false ){        
        //console.log('type', typeof LSvalue, LSvalue.includes(value))
        LSvalue.push(value)
        //console.log('type', typeof LSvalue, LSvalue)
        localStorage.setItem(key, JSON.stringify(LSvalue));    
        return true;
    }
    return false;
}

const getLocalStorage = (key, type=[]) =>{
    /** on LocalStorage
     * @param key => name coocki
     * @param type => type coocki
     */
    //console.log('getLocalStorage import OK')
    return ( localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : type );
}

export { setLocalStorage, getLocalStorage };