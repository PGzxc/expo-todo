// MARK: - Constants
import {BottomTab} from "./router";
import TodoPage from "../pages/Todo/TodoPage";
import CalendarPage from "../pages/Calendar/CalendarPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import MePage from "../pages/Me/MePage";

export const TabConfigs = [

    {
        title: "todo",
        component: TodoPage,
        normal: "check-circle",
        select: "check-circle",
        headerShown: false,
    },
    {
        title: "日历",
        component: CalendarPage,
        normal: "calendar",
        select: "calendar",
        headerShown: false,
    },
    // {
    //     title: "我的",
    //     component: MePage,
    //     normal: "user",
    //     select: "user",
    //     headerShown: false,
    // }
];


export const NaviConfigs = [

    {
        title: "LoginPage",
        name: "LoginPage",
        component: LoginPage,
        headerShown: false,
    },
    {
        title: "RegisterPage",
        name: "RegisterPage",
        component: RegisterPage,
        headerShown: false,
    }, {
        title: "BottomTab",
        name: "BottomTab",
        component: BottomTab,
        headerShown: false,
    },
];

