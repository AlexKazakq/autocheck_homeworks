export type InitialStateType = {
    themeId: number
}

type ChangeThemeType = {
    type: string
    id: number
}

const initState: InitialStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }


        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id } as const) // fix any
