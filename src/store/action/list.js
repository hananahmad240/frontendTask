import * as type from '../types';


export function getAllLists(lists) {
    return {
        type: type.GET_LISTS_REQUESTED,
        payload: lists
    }
}

export function getListById(list) {
    return {
        type: type.GET_LIST_REQUESTED,
        payload: list
    }
}

export function updateListById(lists) {
    return {
        type: type.UPDATE_LIST_REQUESTED,
        payload: lists
    }
}

export function deletListById(lists) {
    return {
        type: type.DELETE_LIST_REQUESTED,
        payload: lists
    }
}

export function createList(lists) {
    return {
        type: type.CREATE_LIST_REQUESTED,
        payload: lists
    }
}