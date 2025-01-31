//useHistory
//useLocation,
//useRouteMatch,
//useParams

import {RouterContext} from "./routerContext"

import {useContext} from "react"

export function useHistory(){
    return useContext(RouterContext).history
}

export function useLocation(){
    return useContext(RouterContext).location
}
export function useRouteMatch(){
    return useContext(RouterContext).match
}

export function useParams(){
    const match =useContext(RouterContext).match
    return match ?match.params:{}
}