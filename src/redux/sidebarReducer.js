const initialState = {
    friendsData: [
        { id: 1, firstName: "Евгений", lastName: "Петров", avatarUrl: "https://скачать-другвокруг.рф/wp-content/uploads/2018/11/avatarka-7.jpg" },
        { id: 2, firstName: "Никита", lastName: "Васильков", avatarUrl: "https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg" },
        { id: 3, firstName: "Света", lastName: "Варфоломеева", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlM_szRqtHV2qjh-Uq0DXmdV-m0XYC0B8pA&usqp=CAU" },
        { id: 4, firstName: "Саня", lastName: "Долгополов", avatarUrl: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" },
        { id: 5, firstName: "Дмитрий", lastName: "Бродягин", avatarUrl: "https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg" },
        { id: 6, firstName: "Юлия", lastName: "Никитина", avatarUrl: "http://sun9-17.userapi.com/impg/rrEXhuJKKJNUz738_jeY0w6iJHPUrUZiv-OiJw/2qoHnCsxJz4.jpg?size=483x604&quality=96&sign=c3da779fb28b22f1d4ce5c744416539a&type=album" }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;