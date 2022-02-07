const initialState = {
    users: [
        { 
            id: 1, 
            firstName: "Евгений", 
            lastName: "Петров", 
            avatarUrl: "https://скачать-другвокруг.рф/wp-content/uploads/2018/11/avatarka-7.jpg", 
            city: "Москва",
            country: "Россия",
            status: "С некоторыми людьми встреча в этой жизни была лишней",
            friendshipStartDate: "2021-09-26",
            followed: false, 
         },
        { 
            id: 2,
            firstName: "Никита",
            lastName: "Васильков",
            avatarUrl: "https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg",
            city: "Смоленск",
            country: "Россия",
            status: "Муж, обозвавший жену жирной коровой, на полгода вместе с ней сел на строгую диету",
            friendshipStartDate: "2021-10-01",
            followed: true, 
        },
        { 
            id: 3, firstName: "Света",
            lastName: "Варфоломеева",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlM_szRqtHV2qjh-Uq0DXmdV-m0XYC0B8pA&usqp=CAU",
            city: "Новосибирск",
            country: "Россия",
            status: "Хочешь увеличить грудь? макни её в растишку!",
            friendshipStartDate: "2021-10-29",
            followed: false, 
        },
        { 
            id: 4, 
            firstName: "Саня", 
            lastName: "Долгополов", 
            avatarUrl: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
            city: "Екатеринбург",
            country: "Россия",
            status: "Принять мужчину таким какой он есть, может только военкомат.",
            friendshipStartDate: "2021-10-30",
            followed: true, 
        },
        { 
            id: 5,
            firstName: "Дмитрий",
            lastName: "Бродягин",
            avatarUrl: "https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg",
            city: "Берлин",
            country: "Германия",
            status: "Ничто не ограничивает твои действия так, как фраза 'делай что хочешь'…",
            friendshipStartDate: "2021-11-12",
            followed: true, 
        },
        { 
            id: 6,
            firstName: "Юлия",
            lastName: "Никитина",
            avatarUrl: "http://sun9-17.userapi.com/impg/rrEXhuJKKJNUz738_jeY0w6iJHPUrUZiv-OiJw/2qoHnCsxJz4.jpg?size=483x604&quality=96&sign=c3da779fb28b22f1d4ce5c744416539a&type=album",
            city: "Минск",
            country: "Беларусь",
            status: "Выйти замуж за IT-шника – это одно, а жить с ним – совсем другое.",
            friendshipStartDate: "2021-12-12",
            followed: true, 
        },
        {
            id: 7,
            firstName: "Игнат",
            lastName: "Копылов",
            avatarUrl: "https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg",
            city: "Мазабука",
            country: "Замбия",
            status: "Маленький мальчик порнуху смотрел. Фильма не понял, но очень вспотел",
            friendshipStartDate: "2021-12-12",
            followed: true,
        },
    ]
}

const followAC = (userId) => ({ type: "FOLLOW", id: userId }); 
const unFollowAC = (userId) => ({ type: "UNFOLLOW", id: userId }); 
const setUsersAC = (users) => ({type: "SET_USERS", users: users})

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user; 
                })
            }; 
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: return state; 
    }
}

export {
    usersReducer,
    followAC,
    unFollowAC,
    setUsersAC
}

// Создать стейт и создать редусер