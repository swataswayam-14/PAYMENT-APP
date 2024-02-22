import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todosAtomSelectorFamily = atomFamily({
    key:"TodoAtomSelectorFamily",
    default: selectorFamily({
        key:"SelectorFamily",
        get: function(id){
            return async function({get}){
                await new Promise(r => setTimeout(r,5000))
                //throw new Error("backend call failed")
                const res = await axios.get(`fdsfsdf`)
                return res.data
            }
        }
    })
})