export type StateType = typeof initialState
export type SettingsMinActionType = ReturnType<typeof settingsMinAC>
export type SettingsMaxActionType = ReturnType<typeof settingsMaxAC>

export type ActionType =
    | SettingsMinActionType
    | SettingsMaxActionType

const initialState = {
    minCount: 0,
    maxCount: 5,
    status: ""
}
export const settingsReducer = (state: StateType = initialState, action: ActionType) => {
    debugger
    switch (action.type){
        case 'SETTINGS-MIN':
            return {...state, minCount: action.min}
        case 'SETTINGS-MAX':
            return {...state, maxCount: action.max}
        default:
            return {...state}
    }
}
export const settingsMinAC =(min: number)=>{
    return {type: 'SETTINGS-MIN', min } as const
}
export const settingsMaxAC =(max: number)=>{
    return {type: 'SETTINGS-MAX', max } as const
}