import { NavSection } from "@/src/types/navigation";

import {
    RxDashboard,
    RxCube,
    RxReader,
    RxPerson,
    RxBarChart,
    RxGear,
    RxQuestionMarkCircled
} from "react-icons/rx";


export const navSection: NavSection[] = [
    {
        title: "GENERAL",
        links: [
            { name: "Dashboard", href: "/", icon: <RxDashboard /> },
            {
                name: "Products",
                href: "/products",
                icon: <RxCube />,
                    count: 119,
                subItems: [
                    { name: "Sneakers", href: "/products/sneakers" },
                    { name: "Jacket", href: "/products/jacket" },
                    { name: "T-Shirt", href: "/products/t-shirt" },
                    { name: "Bag", href: "/products/bag" },
                ]
            },
            { name: "Transaction", href: "/transactions", icon: <RxReader />, count: 441 },
            { name: "Customers", href: "/customers", icon: <RxPerson /> },
            { name: "Sales Report", href: "/sales-report", icon: <RxBarChart /> },
        ],
    },
    {
        title: "TOOLS",
        links: [
            { name: "Account & Settings", href: "/settings", icon: <RxGear /> },
            { name: "Help", href: "/help", icon: <RxQuestionMarkCircled /> },
        ],
    },
];