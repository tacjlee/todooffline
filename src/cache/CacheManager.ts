import localforage from 'localforage'

export default class CacheManager  {
    setItem = (key: any, data:any) => localforage.setItem(key, data)
    getItem = (key:any) => localforage.getItem(key)
    removeItem = (key:any) => localforage.removeItem(key)
    clear = () => localforage.clear()
}