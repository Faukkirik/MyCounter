export type StateType = typeof initialState
export type IncreaseCountActionType = ReturnType<typeof increaseCountAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>
export type CountSetValueActionType = ReturnType<typeof countSetValueAC>
export type CountSetIncorrectStatusActionType = ReturnType<typeof countSetIncorrectStatusAC>
export type ActionType =
    | IncreaseCountActionType
    | ResetCountActionType
    | CountSetValueActionType
    | CountSetIncorrectStatusActionType

const initialState = {
    minCount: 0,
    count: 0,
    maxCount: 5,
    status: ""
}
export const countReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type){
        case 'INCREASE-COUNT':
            return {...state, count: state.count + 1}
        case 'RESET-COUNT':
            return {...state, count: state.minCount}
        case 'COUNT-SET-VALUES':
            return {...state, minCount: action.minCount, maxCount: action.maxCount, count: action.minCount, status: ''}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}
export const increaseCountAC =()=>{
    return {type: 'INCREASE-COUNT' } as const
}
export const resetCountAC =()=>{
    return {type: 'RESET-COUNT' } as const
}
export const countSetValueAC =(minCount: number, maxCount: number)=>{
    return {type: 'COUNT-SET-VALUES', minCount, maxCount } as const
}
export const countSetIncorrectStatusAC =(status: string)=>{
    return {type: 'SET-STATUS', status } as const
}