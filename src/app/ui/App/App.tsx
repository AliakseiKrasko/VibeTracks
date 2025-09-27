import {Routing} from "@/common/routing/Routing.tsx";
import {Header} from "@/common/components/components/Header";
import s from './App.module.css'
import {ToastContainer} from "react-toastify";
import {useGlobalLoading} from "@/common/hooks/useGlobalLoading.ts";
import {LinearProgress} from "@/common/components/components/LinearProgress/LinearProgress.tsx";


export const App = () => {
    const isGlobalLoading = useGlobalLoading()
    return (
        <>
            <Header/>
            {isGlobalLoading && <LinearProgress />}
            <div className={s.layout}>
                <Routing/>
            </div>
            <ToastContainer />
        </>
    )
}