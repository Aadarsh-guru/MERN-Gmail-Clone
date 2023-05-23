import { lazy } from "react"
const Main = lazy(() => import('../pages/Main'))
const Emails = lazy(() => import("../components/Emails"))
const ViewEmail = lazy(() => import('../components/ViewEmail'))



export const routes = {
    main: {
        path: '',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    },
    invalid: {
        path: '/*',
        element: Emails
    },
}

