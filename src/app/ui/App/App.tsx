import {Routing} from "@/common/routing/Routing.tsx";
import {Header} from "@/common/components/components/Header";
import s from './App.module.css'
import {ToastContainer} from "react-toastify";


export const App = () => {
    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing/>
            </div>
            <ToastContainer />
        </>
    )
}